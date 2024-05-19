import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

export const Redirect = () => {
	const { search } = useLocation();
	const params = new URLSearchParams(search);
	const code = params.get("code");
	const { setUser } = useContext(UserContext);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_SERVER_URL}/auth/token?code=${code}&redirectUri=${import.meta.env.VITE_REDIRECT_URI}`)
			.then(res => res.json())
			.then(data => {
				localStorage.setItem("token", data.access_token);
				localStorage.setItem("refresh", data.refresh_token);
				setUser({ token: data.access_token, refresh: data.refresh_token, logged: true })
				setLoading(false);
			});
	}, []);

	return (
		<>
			{
				loading ?
					<h1>Loading...</h1>
					:
					<Navigate to="/" />
			}
		</>
	);
}

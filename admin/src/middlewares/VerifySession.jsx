import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { Login } from "../pages/Login"
import { Add } from "../pages/Add"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserProvider"
import { Home } from "../pages/Home"
import { SquareLoader } from "react-spinners"
import { SchoolMap } from "../../../shared/components/SchoolMap"
import { Edit } from "../pages/Edit"

export const VerifySession = () => {

    const { user, setUser } = useContext(UserContext);
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/events/`)
            .then(res => res.json())
            .then(data => setEvents(data))

        if (localStorage.getItem("token") === null) {
            setLoading(false);
            return setUser({ logged: false });
        }

        try {
            fetch(`${import.meta.env.VITE_SERVER_URL}/auth/refresh`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("refresh")}`
                }
            }).then(res => res.json())
                .then(data => {
                    localStorage.setItem("token", data.access_token);
                    localStorage.setItem("refresh", data.refresh_token);
                    setUser({ ...data, logged: true })
                    setLoading(false);
                })
        } catch (error) {
            setLoading(false);
            localStorage.removeItem("token");
            localStorage.removeItem("refresh");
            navigate("/");
            console.error(error);
        }
    }, []);

    return (
        <Routes>
            <Route path="/" element={loading ?
                <>
                    <SchoolMap display={false} />
                    <div className="fixed animate-fade top-0 left-0 w-full h-full z-50 bg-black/25 flex items-center justify-center">
                        <SquareLoader color="#000" size={50} loading={loading} />
                    </div>
                </>
                : user.logged ? <Home /> : <Login />} />
            <Route path="/add" element={loading ?
                <>
                    <SchoolMap display={false} />
                    <div className="fixed animate-fade top-0 left-0 w-full h-full z-50 bg-black/25 flex items-center justify-center">
                        <SquareLoader color="#000" size={50} loading={loading} />
                    </div>
                </>
                : user.logged ? <Add events={events} setEvents={setEvents} /> : <Navigate to={'/'} />} />
            <Route path="/edit/:id" element={loading ?
                <>
                    <SchoolMap display={false} />
                    <div className="fixed animate-fade top-0 left-0 w-full h-full z-50 bg-black/25 flex items-center justify-center">
                        <SquareLoader color="#000" size={50} loading={loading} />
                    </div>
                </>
                : user.logged ? <Edit /> : <Navigate to={'/'} />} />
        </Routes>
    )
}

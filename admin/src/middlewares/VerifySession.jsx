import { Route, Routes } from "react-router-dom"
import { Login } from "../components/Login"
import { Add } from "../pages/Add"
import { Events } from "../../../shared/pages/Events"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserProvider"
import { Home } from "../pages/Home"
import { SquareLoader } from "react-spinners"
import { SchoolMap } from "../../../shared/components/SchoolMap"

export const VerifySession = () => {

    const { user, setUser } = useContext(UserContext);
    const [events, setEvents] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/events/`)
            .then(res => res.json())
            .then(data => setEvents(data))

        if (localStorage.getItem("token") === null) {
            setLoading(false);
            return setUser({ logged: false });
        }

        fetch(`${import.meta.env.VITE_SERVER_URL}/auth/refresh`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("refresh")}`
            }
        }).then(res => res.json())
            .then(data => {
                setUser({ ...data, logged: true })
                setLoading(false);
            })
    }, []);

    return (
        <Routes>
            <Route path="/" element={loading ?
                <>
                    <SchoolMap display={false}/>
                    <div className="fixed animate-fade top-0 left-0 w-full h-full z-50 bg-black/25 flex items-center justify-center">
                        <SquareLoader color="#000" size={50} loading={loading} />
                    </div>
                </>
                : user.logged ? <Home /> : <Login />} />
            <Route path="/add" element={<Add events={events} setEvents={setEvents} />} />
            <Route path="/events" element={<Events events={events} />} />
        </Routes>
    )
}

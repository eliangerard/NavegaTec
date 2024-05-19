import { useEffect, useState } from "react";
import { SchoolMap } from "../../../shared/components/SchoolMap"
import { SquareLoader } from "react-spinners";
import { PostedEvent } from "../components/PostedEvent";
import { api } from "../helpers/api";
import { Card } from "../../../shared/ui/icons/Card";
import { Door } from "../../../shared/ui/icons/Door";
import { Link } from "react-router-dom";

export const Home = () => {

    const [events, setEvents] = useState([]);
    const [allEvents, setAllEvents] = useState([]);

    const [loading, setLoading] = useState(true);

    const fetchEvents = () => {
        api('events', 'GET').then(data => setEvents(data));
        api('events/all', 'GET').then(data => {
            setAllEvents(data)
            setLoading(false);
        });
        console.log("Jalando nueva data");
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        window.location.reload();
    }

    return (
        <div className="flex h-full flex-1">
            <SchoolMap events={events} />
            <div className="relative flex flex-col right-0 top-0 h-full bg-white min-w-fit w-[60vh] z-20 border-l-4 border-black p-4 pb-0 text-center">
                <div className="absolute bg-white border-4 border-black rounded-bl-2xl border-t-0 top-0 right-full p-2">
                    <h2 className="font-display font-bold">Acciones</h2>
                    <Link to={"/add"} className="flex flex-col items-center my-2">
                        <Card className="h-10 w-10" />
                        <p className="text-sm font-medium">Nuevo anuncio</p>
                    </Link>
                    <button onClick={handleLogout} className="flex flex-col items-center">
                        <Door className="h-10 w-10" />
                        <p className="text-sm font-medium">Cerrar sesión</p>
                    </button>

                </div>
                <div className="flex justify-between">
                    {/* <div className="w-28"></div> */}
                    <h1 className="font-serif text-4xl text-center w-full font-bold mt-4">Editorial</h1>
                    {/* <button className="w-28 font-serif bg-white rounded-full border-2 nt-shadow border-black">Guardar</button> */}
                </div>
                <p className="my-2 text-lg">Arrastra, activa, desactiva o elimina algún anuncio.</p>
                <div className="overflow-y-auto grow">
                    {loading ?
                        <div className="w-full h-full p-8 flex items-center justify-center">
                            <SquareLoader color="#000" size={50} loading={loading} />
                        </div>
                        :
                        (allEvents.length > 0 ?
                            <div className="grid grid-cols-2 p-2 h-fit">
                                {allEvents?.map((e) => (
                                    <PostedEvent key={`event${e._id}`} event={e} refresh={fetchEvents} />
                                ))}
                            </div>
                            :
                            <div className="w-full h-full flex items-center justify-center text-center">
                                <i>Aún no hay eventos publicados</i>
                            </div>)
                    }
                </div>
            </div>
        </div >
    )
}

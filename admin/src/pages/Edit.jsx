import { useNavigate, useParams } from "react-router-dom";
import { SchoolMap } from "../../../shared/components/SchoolMap"
import { FillEvent } from "../components/FillEvent";
import { useEffect, useRef, useState } from "react";

export const Edit = () => {
    const container = useRef(null);

    const { id } = useParams();
    const [newEvent, setNewEvent] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_SERVER_URL}/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                console.log(data);
                setNewEvent(data)
            })

        const handleClickOutside = (event) => {
            if (container.current && !container.current.contains(event.target)) {
                navigate("/");
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    return (
        <>
            <SchoolMap />
            <div className={`fixed overflow-hidden top-0 left-0 w-full h-full bg-black/25 flex items-center justify-center z-20 duration-[200ms] transition-all`}>
                <div ref={container} className="fixed flex flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 h-fit min-w-fit w-9/12 w-full lg:max-w-screen-lg bg-white rounded-2xl border-4 border-black nt-shadow items-center justify-center p-12 z-30">
                    {!loading && <FillEvent edit id={id} newEvent={newEvent} setNewEvent={setNewEvent} />}
                </div>
            </div >
        </>
    )
}

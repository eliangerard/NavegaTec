import { useEffect, useRef, useState } from "react"
import { SchoolMap } from "../../../shared/components/SchoolMap"
import { InitializeEvent } from "../components/InitializeEvent";
import { FillEvent } from "../components/FillEvent";
import { Draggable } from "pigeon-maps";
import { Icon } from "../../../shared/ui/icons/Icon";
import { Navigate, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { api } from "../helpers/api";

const newEventTemplate = {
    anchor: [28.71025950442226, -106.1059886447052],
    title: "",
    description: "",
    button: "",
    link: "",
    where: "",
    when: new Date(),
    img: "",
    type: "administrative",
}

export const Add = ({ events, setEvents }) => {

    const navigate = useNavigate();

    const addOutside = useRef(null);

    const [step, setStep] = useState(1);

    const [newEvent, setNewEvent] = useState(newEventTemplate);

    useEffect(() => {
        const handleClick = (e) => {
            if (addOutside.current && !addOutside.current.contains(e.target)) {
                navigate('/');
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        }
    }, [navigate])

    const handleUpdateAnchor = () => {
        api(`events/${newEvent._id}`, 'PATCH', { anchor: newEvent.anchor }).then(() => {
            navigate('/');
        })
    }

    return (
        <>
            {step != 3 ?
                <>
                    <SchoolMap events={events} setEvents={setEvents} display={false} />
                    <div className={`fixed overflow-hidden top-0 left-0 w-full h-full bg-black/25 flex items-center justify-center z-20 duration-[200ms] transition-all`}>
                        <div ref={addOutside} className="fixed flex flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 h-fit min-w-fit w-9/12 w-full lg:max-w-screen-lg bg-white rounded-2xl border-4 border-black nt-shadow items-center justify-center p-12 z-30">
                            {step == 1 &&
                                <InitializeEvent
                                    setStep={setStep}
                                    setNewEvent={setNewEvent}
                                />}
                            {step == 2 &&
                                <FillEvent
                                    setStep={setStep}
                                    newEvent={newEvent}
                                    setNewEvent={setNewEvent}
                                    setEvents={setEvents}
                                />}

                        </div>
                    </div >
                </> :
                typeof newEvent.where == "number" ? 
                // <Home events={events} newEvent={newEvent} />
                <SchoolMap events={events} setEvents={setEvents} disabled moving={newEvent._id}>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex z-50">
                        <div className="rounded-full border-[3px] border-black bg-white nt-shadow-sm px-6 py-2">
                            <p className="font-serif text-lg font-medium">¡Ubica el ícono donde quieras!</p>
                        </div>
                        <button className="ml-4 rounded-full border-[3px] border-black bg-green nt-shadow-sm px-6 py-2 font-serif font-medium text-lg"
                            onClick={handleUpdateAnchor}
                        >Guardar</button>
                    </div>
                    <Draggable
                        className="origin-center"
                        anchor={newEvent.anchor}
                        onDragMove={(anchor) => setNewEvent(event => ({ ...event, anchor }))}
                        color='blue'
                        width={50}
                    >
                        <div className="relative">
                            <div className="absolute -translate-x-1/2 -translate-y-1/2 animate-pulse">
                                <Icon building={newEvent.where} />
                            </div>
                        </div>
                    </Draggable>
                </SchoolMap>
                : <Navigate to="/" />
            }
        </>
    )
}

import { useEffect, useRef, useState } from "react"
import { SchoolMap } from "../../../shared/components/SchoolMap"
import { InitializeEvent } from "../components/InitializeEvent";
import { FillEvent } from "../components/FillEvent";
import { Draggable } from "pigeon-maps";
import { Icon } from "../../../shared/ui/icons/Icon";
import { useNavigate } from "react-router-dom";

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

export const Add = ({events, setEvents}) => {

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

    return (
        <>
            <SchoolMap events={events} setEvents={setEvents} disabled>
                <Draggable
                    className="origin-center"
                    anchor={newEvent.anchor}
                    onDragMove={(anchor) => setNewEvent(event => ({ ...event, anchor }))}
                    color='blue'
                    width={50}
                >
                    <div className="relative">
                        <div className="absolute -translate-x-1/2 -translate-y-1/2">
                            <Icon building={newEvent.where} />
                        </div>
                    </div>
                </Draggable>
            </SchoolMap>
            {step != 3 ? <div className={`fixed overflow-hidden top-0 left-0 w-full h-full bg-black/25 flex items-center justify-center z-20 duration-[200ms] transition-all`}>
                <div ref={addOutside} className="fixed flex flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 h-fit min-w-fit w-9/12 max-w-screen-lg bg-white rounded-2xl border-4 border-black nt-shadow items-center justify-center p-12 z-30">

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
            </div > :
                <div className="fixed right-0 top-0 h-full bg-white w-[600px] z-20 border-l-4 border-black p-4 text-center">
                    <div className="flex justify-between">
                        <div className="w-28"></div>
                        <h1 className="font-serif text-4xl font-bold ">Editorial</h1>
                        <button className="w-28 font-serif bg-white rounded-full border-2 nt-shadow border-black">Guardar</button>
                    </div>
                    <p className="my-2">Arrastra, activa o desactiva del mapa o elimina algún anuncio.</p>
                    <div className="flex flex-wrap p-2">
                        {events.map((e, i) => (
                            <div draggable className="h-[400px] w-[250px] flex flex-col m-2 my-4" key={i}>
                                <div className="h-10 border-4 border-b-0 border-black rounded-t-3xl mx-4 flex justify-center items-center">
                                    <button className="rounded-full border-2 border-black h-8 w-32 flex items-center">
                                        <div className="rounded-full h-6 w-6 border-2 border-black bg-green ml-0.5 mr-3"></div>
                                        activo
                                    </button>
                                    <button className="ml-4">B</button>
                                </div>
                                <div className={`col-span-4 ${newEvent.type === 'administrative' ? 'bg-purple' : newEvent.type === 'security' ? 'bg-red' : newEvent.type === 'papers' ? 'bg-green' : newEvent.type === 'warning' ? 'bg-yellow' : 'bg-white'} border-4 grow max-w-1/2 border-black rounded-lg nt-shadow p-4 flex flex-col justify-between items-center`}>
                                    <div className="flex flex-col items-center">
                                        <h2 className="text-3xl font-bold font-display text-center mb-4">{newEvent.title}</h2>
                                        <p className="">{newEvent.description}</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        {newEvent.where != '' && <Icon className='w-24 max-h-20' building={newEvent.where} />}
                                        {newEvent.button.length > 0 && <a target="_blank" href={newEvent.link} className="bg-red rounded-full px-6 text-lg h-fit border-2 border-black nt-shadow w-fit mt-8 font-serif">{newEvent.button}</a>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

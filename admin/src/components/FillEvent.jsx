/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import { BackButton } from "../../../shared/ui/BackButton"
import { es } from 'date-fns/locale';
import { DayPicker } from "react-day-picker"
import 'react-day-picker/dist/style.css';
import buildings from "../../../shared/data/buildings";
import { Icon } from "../../../shared/ui/icons/Icon";
import { useNavigate } from "react-router-dom";

export const FillEvent = ({ setStep, newEvent, setNewEvent, setEvents }) => {

    const navigate = useNavigate();

    const imgInput = useRef(null)
    const datePicker = useRef(null)
    const wherePicker = useRef(null)
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showWherePicker, setShowWherePicker] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (datePicker.current && !datePicker.current.contains(event.target)) {
                setShowDatePicker(false);
            }
            if (wherePicker.current && !wherePicker.current.contains(event.target)) {
                setShowWherePicker(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleWhere = (where) => {
        setNewEvent({ ...newEvent, where });
        setShowWherePicker(false);
    }

    const handleAdd = () => {
        setEvents(events => [...events, newEvent])
        fetch(`${import.meta.env.VITE_SERVER_URL}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(newEvent)
        }).then(res => res.json()).then(data => {
            console.log(data);
            setNewEvent(data);
            if (typeof newEvent.where === 'number')
                setStep(3);
            else
                navigate('/')
        })
    }

    return (
        <>
            <div className="absolute top-8 left-8">
                <BackButton onClick={() => setStep(1)} />
            </div>
            <h1 className="text-5xl text-center font-display font-bold">Aviso</h1>
            <p>¿Qué mostrará tu anuncio?</p>
            <div className="grid grid-cols-11 w-full grow gap-4 py-4">
                <div className={`col-span-3 w-[200px] ${newEvent.type === 'administrative' ? 'bg-purple' : newEvent.type === 'security' ? 'bg-red' : newEvent.type === 'papers' ? 'bg-green' : newEvent.type === 'warning' ? 'bg-yellow' : 'bg-white'} border-[3px] w-full border-black rounded-lg nt-shadow-sm p-4 flex flex-col justify-between items-center`}>
                    <div className="flex flex-col items-center">
                        <h2 className="text-3xl font-display font-bold text-center mb-4 text-ellipsis">{newEvent.title}</h2>
                        <p className="text-center">{newEvent.description}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        {newEvent.where != '' && <Icon className='w-24 max-h-20' building={newEvent.where} />}

                        <div className="h-6 mt-4">{newEvent.button.length > 0 && <a target="_blank" href={newEvent.link} className="bg-red font-serif rounded-full px-6 h-fit border-[3px] border-black nt-shadow-sm w-fit">{newEvent.button}</a>}</div>
                    </div>
                </div>
                <div className="col-span-6 flex flex-col w-full">
                    <input type="text" className="border-[3px] mb-3 border-black rounded-3xl nt-shadow-sm px-4 h-10 focus:outline-0" placeholder="Título del aviso"
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        value={newEvent.title}
                    />
                    <textarea className="border-[3px] mb-3 resize-none border-black rounded-3xl nt-shadow-sm p-4 grow focus:outline-0" type="text" placeholder="Descripción"
                        onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                        value={newEvent.description}
                    />
                    <input type="text" className="border-[3px] mb-3 border-black rounded-3xl nt-shadow-sm px-4 h-10 focus:outline-0" placeholder="Título del botón"
                        onChange={(e) => setNewEvent({ ...newEvent, button: e.target.value })}
                        value={newEvent.button}
                    />
                    <input type="text" className="border-[3px] border-black rounded-3xl nt-shadow-sm px-4 h-10 focus:outline-0" placeholder="Enlace al que lleva el botón"
                        onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })}
                        value={newEvent.link}
                    />
                </div>
                <div className="col-span-2 flex flex-col justify-between items-center w-full">
                    <p className="my-2">¿Dónde?</p>
                    <div className="relative">
                        {showWherePicker &&
                            <div ref={wherePicker} className="flex w-96 items-start p-2 max-h-60 overflow-auto mr-4 flex-wrap absolute top-1/2 -translate-y-1/2 right-full bg-purple rounded-md border-[3px] border-black nt-shadow">
                                <h2 className="font-display font-bold text-center w-full text-xl pb-2">¿Será fuera de un edificio?</h2>
                                {
                                    [...Array(6)].map((_, i) =>
                                        <button key={i} onClick={() => handleWhere(i + 1)}>
                                            <Icon building={i + 1} />
                                        </button>
                                    )
                                }
                                <h2 className="font-display font-bold text-center w-full text-xl pb-2">¿Dónde se mostrará?</h2>
                                {buildings.map((building, i) => (
                                    <button onClick={() => handleWhere(building)} key={i} className="m-2">
                                        <Icon building={building} />
                                    </button>
                                ))}
                            </div>
                        }
                        <button onClick={() => setShowWherePicker(show => !show)} className="flex items-center justify-center bg-purple h-16 w-16 rounded-2xl border-[3px] border-black border-dashed">
                            {
                                newEvent.where != '' && <Icon building={newEvent.where} />
                            }
                        </button>
                    </div>
                    <p className="my-2">¿Cuándo?</p>
                    <div className="relative">
                        {showDatePicker &&
                            <div ref={datePicker}>
                                <DayPicker className="absolute top-1/2 -translate-y-1/2 right-full bg-white rounded-xl border-[3px] border-black nt-shadow-sm p-2 select-none" locale={es}
                                    mode="single"
                                    onSelect={(date) => setNewEvent({ ...newEvent, when: date })}
                                    selected={newEvent.when}
                                    modifiersClassNames={{
                                        selected: 'bg-yellow rounded-full !border-1 border-black nt-shadow-sm h-8 w-8 m-1',
                                        disabled: 'bg-red',
                                    }}
                                />
                            </div>
                        }
                        <button className="bg-purple h-16 w-16 rounded-md border-[3px] border-black px-2 font-serif text-xl"
                            onClick={() => setShowDatePicker(show => !show)}
                        >
                            <p className="leading-none text-center min-w-fit w-1/2">{
                                newEvent.when && new Date(newEvent.when).getDate() < 10 ?
                                    `0${new Date(newEvent.when).getDate()}` :
                                    new Date(newEvent.when).getDate()
                            }
                            </p>
                            <div className="flex justify-end">
                                <p className="leading-none text-center min-w-fit w-1/2">{
                                    newEvent.when && new Date(newEvent.when).getMonth() + 1 < 10 ?
                                        `0${new Date(newEvent.when).getMonth() + 1}` :
                                        new Date(newEvent.when).getMonth() + 1
                                }
                                </p>
                            </div>
                        </button>
                    </div>
                    <p className="my-2">Imágen</p>
                    <button className="bg-purple h-16 w-16 rounded-xl border-[3px] border-black"
                        onClick={() => imgInput.current.click()}
                    >
                        +
                    </button>
                    <input ref={imgInput} className="hidden" type="file"
                        accept="image/*"
                        multiple={false}
                        onChange={(e) => {
                            const file = e.target.files[0];
                            const reader = new FileReader();
                            reader.onload = (e) => {
                                setNewEvent({ ...newEvent, img: e.target.result });
                            }
                            reader.readAsDataURL(file);
                        }}
                    />
                    <button className="bg-red rounded-full px-4 h-fit border-[3px] border-black nt-shadow-sm w-fit mt-4"
                        onClick={handleAdd}
                    >Añadir</button>
                </div>
            </div>

        </>

    )
}

/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import { BackButton } from "../../../shared/ui/BackButton"
import { es } from 'date-fns/locale';
import { DayPicker } from "react-day-picker"
import 'react-day-picker/dist/style.css';
import buildings from "../../../shared/data/buildings";
import { Icon } from "../../../shared/ui/icons/Icon";
import { useNavigate } from "react-router-dom";
import { SquareLoader } from "react-spinners";

export const FillEvent = ({ edit, id, setStep, newEvent, setNewEvent, setEvents }) => {

    const navigate = useNavigate();

    const imgInput = useRef(null)
    const whenDatePicker = useRef(null)
    const fromDatePicker = useRef(null)
    const toDatePicker = useRef(null)
    const wherePicker = useRef(null)
    const [loading, setLoading] = useState(false);
    const [showWhenDatePicker, setShowWhenDatePicker] = useState(false);
    const [showFromDatePicker, setShowFromDatePicker] = useState(false);
    const [showToDatePicker, setShowToDatePicker] = useState(false);
    const [showWherePicker, setShowWherePicker] = useState(false);
    const [errored, setErrored] = useState({ title: false, description: false, when: false, where: false, button: false, link: false });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (whenDatePicker.current && !whenDatePicker.current.contains(event.target)) {
                setShowWhenDatePicker(false);
            }
            if (fromDatePicker.current && !fromDatePicker.current.contains(event.target)) {
                setShowFromDatePicker(false);
            }
            if (toDatePicker.current && !toDatePicker.current.contains(event.target)) {
                setShowToDatePicker(false);
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

    const evaluateErrors = () => {
        if (!newEvent.title || newEvent.title.trim().length == 0 || !newEvent.description || newEvent.description.trim().length == 0 || !newEvent.when || !newEvent.where)
            return setErrored({
                title: !newEvent.title,
                description: !newEvent.description,
                when: !newEvent.when,
                where: !newEvent.where,
            });
    }

    const handleAdd = () => {
        evaluateErrors();
        setLoading(true);
        console.log(newEvent);
        fetch(`${import.meta.env.VITE_SERVER_URL}/events/${edit ? newEvent._id : ''}`, {
            method: edit ? 'PATCH' : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(newEvent)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (edit)
                return navigate('/');
            setNewEvent(data);
            if (!newEvent.where)
                navigate('/')
            else
                setStep(3);
        })
    }

    return (
        <>
            <div className="absolute top-8 left-8">
                <BackButton onClick={() => {
                    if(edit)
                        return navigate('/');
                    
                    setStep(1)
                }} />
            </div>
            <h1 className="text-5xl text-center font-display font-bold">Aviso</h1>
            <p>¿Qué mostrará tu anuncio?</p>
            <div className="relative">
                {loading && <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
                    <SquareLoader color="#000" size={50} loading={loading} />
                </div>}
                <div className={`grid grid-cols-11 w-full grow gap-4 py-4 transition-all ${loading ? 'opacity-25' : ''}`}>
                    <div className={`w-[220px] col-span-3 ${newEvent.type === 'administrative' ? 'bg-purple' : newEvent.type === 'security' ? 'bg-red' : newEvent.type === 'papers' ? 'bg-green' : newEvent.type === 'warning' ? 'bg-yellow' : 'bg-white'} border-[3px] border-black rounded-lg nt-shadow-sm p-4 flex flex-col justify-between items-center`}>
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-2xl font-display font-bold text-center text-ellipsis w-full truncate h-6">{newEvent.title.toUpperCase()}</h2>
                            <p className="text-center h-[140px] w-full line-clamp-6 my-2 text-pretty hyphens-auto">{newEvent.description}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            {newEvent.where != '' && <Icon className='w-32 max-h-24' fontSize="text-3xl" building={newEvent.where} />}

                            <div className="h-6 mt-4">{newEvent.button.length > 0 && <a target="_blank" href={newEvent.link} className="bg-red font-serif rounded-full px-6 h-fit border-[3px] border-black nt-shadow-sm w-fit">{newEvent.button}</a>}</div>
                        </div>
                    </div>
                    <div className="col-span-6 flex flex-col w-full">
                        <input type="text" className={`border-[3px] mb-3 border-black rounded-3xl nt-shadow-sm px-4 h-10 focus:outline-0 ${errored.title && 'placeholder:text-red'}`}
                            placeholder="Título del aviso*"
                            onChange={(e) => {
                                setErrored({ ...errored, title: false });
                                setNewEvent({ ...newEvent, title: e.target.value.toUpperCase() })
                            }}
                            value={newEvent.title}
                        />
                        <textarea className={`border-[3px] mb-3 resize-none border-black rounded-3xl nt-shadow-sm p-4 grow focus:outline-0 ${errored.description && 'placeholder:text-red'}`} type="text"
                            placeholder="Descripción*"
                            onChange={(e) => {
                                setErrored({ ...errored, description: false });
                                setNewEvent({ ...newEvent, description: e.target.value })
                            }}
                            value={newEvent.description}
                        />
                        <input type="text" className="border-[3px] mb-3 border-black rounded-3xl nt-shadow-sm px-4 h-10 focus:outline-0" placeholder="Título del botón"
                            onChange={(e) => {
                                setNewEvent({ ...newEvent, button: e.target.value })
                            }}
                            value={newEvent.button}
                        />
                        <input type="text" className="border-[3px] border-black rounded-3xl nt-shadow-sm px-4 h-10 focus:outline-0" placeholder="Enlace al que lleva el botón"
                            onChange={(e) => {
                                setNewEvent({ ...newEvent, link: e.target.value })
                            }}
                            value={newEvent.link}
                        />
                    </div>
                    <div className="col-span-2 flex flex-col justify-between items-center w-full">
                        <p className="font-medium my-1">Imágen</p>
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
                        <p className="font-medium my-1">¿Dónde?</p>
                        <div className="relative">
                            {showWherePicker &&
                                <div ref={wherePicker} className="flex w-[360px] items-start p-2 max-h-60 overflow-auto mr-4 flex-wrap absolute top-1/2 -translate-y-1/2 right-full bg-purple rounded-md border-[3px] border-black nt-shadow">
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
                        <p className={`font-medium my-1 ${errored.when && 'text-red'}`}>¿Cuándo?*</p>
                        <div className="relative">
                            {showWhenDatePicker &&
                                <div ref={whenDatePicker}>
                                    <div className="absolute top-1/2 -translate-y-1/2 mr-1 right-full bg-white rounded-xl border-[3px] border-black nt-shadow-sm p-2 select-none">
                                        <p className="font-medium text-center">¿Qué fecha mostrará?</p>
                                        <DayPicker className="bg-white rounded-xl select-none m-0" locale={es}
                                            mode="single"
                                            onSelect={(date) => setNewEvent(prev => ({ ...prev, when: date }))}
                                            selected={newEvent.when}
                                            modifiersClassNames={{
                                                selected: 'bg-yellow rounded-full !border-1 border-black nt-shadow-sm h-8 w-8 m-1',
                                                disabled: 'bg-red',
                                            }}
                                        />
                                    </div>
                                </div>
                            }
                            <button className="bg-purple h-fit py-0.5 w-22 rounded-md border-[3px] border-black px-2 font-serif"
                                onClick={() => setShowWhenDatePicker(show => !show)}
                            >
                                <p className="leading-none text-center w-fit">{
                                    newEvent.when ? (new Date(newEvent.when).getDate() < 10 ?
                                        `0${new Date(newEvent.when).getDate()}` :
                                        new Date(newEvent.when).getDate()) : ''
                                }
                                    -
                                    {
                                        newEvent.when ? (new Date(newEvent.when).getMonth() + 1 < 10 ?
                                            `0${new Date(newEvent.when).getMonth() + 1}` :
                                            new Date(newEvent.when).getMonth() + 1)
                                            : ''
                                    }
                                </p>
                            </button>
                        </div>
                        <p>Desde</p>
                        <div className="relative">
                            {showFromDatePicker &&
                                <div ref={fromDatePicker}>
                                    <div className="absolute top-1/2 -translate-y-1/2 mr-1 right-full bg-white rounded-xl border-[3px] border-black nt-shadow-sm p-2 select-none">
                                        <p className="font-medium text-center">¿Cuándo se activará?</p>
                                        <DayPicker className="bg-white rounded-xl select-none m-0" locale={es}
                                            mode="single"
                                            onSelect={(date) => setNewEvent({ ...newEvent, from: date })}
                                            selected={newEvent.from}
                                            modifiersClassNames={{
                                                selected: 'bg-yellow rounded-full !border-1 border-black nt-shadow-sm h-8 w-8 m-1',
                                                disabled: 'bg-red',
                                            }}
                                        />
                                    </div>
                                </div>
                            }
                            <button className="bg-purple h-fit py-0.5 w-22 rounded-md border-[3px] border-black px-2 font-serif"
                                onClick={() => setShowFromDatePicker(show => !show)}
                            >
                                <p className="leading-none text-center w-fit">{
                                    newEvent.from ? (new Date(newEvent.from).getDate() < 10 ?
                                        `0${new Date(newEvent.from).getDate()}` :
                                        new Date(newEvent.from).getDate()) : ''
                                }
                                    -
                                    {
                                        newEvent.from ? (new Date(newEvent.from).getMonth() + 1 < 10 ?
                                            `0${new Date(newEvent.from).getMonth() + 1}` :
                                            new Date(newEvent.from).getMonth() + 1)
                                            : ''
                                    }
                                </p>
                            </button>
                        </div>
                        <p>Hasta</p>
                        <div className="relative">
                            {showToDatePicker &&
                                <div ref={toDatePicker}>
                                    <div className="absolute top-1/2 -translate-y-1/2 mr-1 right-full bg-white rounded-xl border-[3px] border-black nt-shadow-sm p-2 select-none">
                                        <p className="font-medium text-center">¿Cuándo se desactivará?</p>
                                        <DayPicker className="bg-white rounded-xl select-none m-0" locale={es}
                                            mode="single"
                                            onSelect={(date) => setNewEvent({ ...newEvent, to: date })}
                                            selected={newEvent.to}
                                            modifiersClassNames={{
                                                selected: 'bg-yellow rounded-full !border-1 border-black nt-shadow-sm h-8 w-8 m-1',
                                                disabled: 'bg-red',
                                            }}
                                        />
                                    </div>
                                </div>
                            }
                            <button className="bg-purple h-fit py-0.5 text w-22 rounded-md border-[3px] border-black px-2 font-serif"
                                onClick={() => setShowToDatePicker(show => !show)}
                            >
                                <p className="leading-none text-center w-fit">{
                                    newEvent.to ? (new Date(newEvent.to).getDate() < 10 ?
                                        `0${new Date(newEvent.to).getDate()}` :
                                        new Date(newEvent.to).getDate()) : ''
                                }
                                    -
                                    {
                                        newEvent.to ? (new Date(newEvent.to).getMonth() + 1 < 10 ?
                                            `0${new Date(newEvent.to).getMonth() + 1}` :
                                            new Date(newEvent.to).getMonth() + 1)
                                            : ''
                                    }
                                </p>
                            </button>
                        </div>

                        <button className={`${edit ? 'bg-yellow' : 'bg-red'} rounded-full px-4 h-fit border-[3px] border-black nt-shadow-sm w-fit mt-4`}
                            onClick={handleAdd}
                        >
                            {edit ? 'Actualizar' : 'Añadir'}
                        </button>
                    </div >
                </div >
            </div >


        </>

    )
}

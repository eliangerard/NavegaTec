import { useEffect, useState, useRef } from 'react';
import { Building } from '../ui/icons/Building';
import buildings from '../data/buildings';
import { Icon } from '../ui/icons/Icon';
import { BackButton } from '../ui/BackButton';
import { Event } from '../ui/Event';

export const BuildingInfo = ({ show, id, setShow }) => {

    const container = useRef(null);

    const [building, setBuilding] = useState(null);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/events/building/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            })
    }, [building]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (container.current && !container.current.contains(event.target)) {
                setShow(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [container, setShow]);

    useEffect(() => {
        buildings.find((b) => {
            if (b.id === id) {
                setBuilding(b);
            }
        });
    }, [id])

    return (
        <div className={`${show ? 'absolute' : 'hidden'} overflow-auto top-0 left-0 w-full h-full bg-white md:bg-black/25 flex items-center justify-center z-20 duration-[200ms] transition-all`}>
            <div ref={container} className="flex flex-col z-50 h-fit w-full h-full md:w-4/5 py-8 lg:w-3/5">
                <div className="flex justify-center md:justify-between items-center bg-white md:border-2 md:border-black md:rounded-xl md:py-4 px-4 shadow-none md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-8 md:mt-0">
                    <div className="hidden md:block w-12 h-12 flex items-center justify-center">
                        <BackButton onClick={() => setShow(false)} />
                    </div>
                    <div className='text-center'>
                        <h3 className='font-display font-bold text-4xl'>{building?.name}</h3>
                        <p>{building?.subtitle}</p>
                    </div>
                    <div className='hidden md:block'>
                        <Icon building={building} />
                    </div>
                </div>
                <div className='w-full md:grow grid md:grid-cols-2 md:gap-4 md:mt-4'>
                    <div className='bg-white h-fit p-1.5 rounded-2xl m-4 md:m-0 border-2 border-black shadow-none md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
                        <img className='rounded-xl max-h-[300px] md:min-h-[400px] w-full object-cover' src={building?.img ? building.img : "/mock-building.png"} alt="" />
                    </div>
                    <div className='bg-white w-full md:py-4 px-4 rounded-2xl md:border-2 border-black shadow-none md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
                        <h4 className='font-display font-semibold text-2xl my-2'>Descripción</h4>
                        <p>En este edificio suelen dar mayormente clases de ISC y IDI.</p>
                    </div>
                </div>
                <div className='bg-white md:border-2 shadow-none md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-black md:rounded-2xl mt-4 min-h-18 p-4'>
                    <h3 className='font-display text-2xl font-bold text-center'>Sin eventos</h3>
                    <div className="grid grid-cols-1 md:px-4 py-2">
                        <div className='w-full grid md:grid-cols-2 gap-4 md:pr-2 auto-rows-auto'>
                            {
                                events.map((event, i) => (
                                    <Event col={1} key={`event#${i}`} {...event} i={i} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='block md:hidden w-fit'>
                        <Icon building={building} />
                    </div>
                    <div className="block md:hidden w-12 h-12 flex items-center justify-center ">
                        <BackButton onClick={() => setShow(false)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

import { useEffect, useState, useRef } from 'react';
import { Building } from '../ui/icons/Building';
import buildings from '../data/buildings';
import { Icon } from '../ui/icons/Icon';
import { BackButton } from '../ui/BackButton';
import { Event } from '../ui/Event';
import { SquareLoader } from 'react-spinners';

export const BuildingInfo = ({ show, id, setShow }) => {

    const container = useRef(null);

    const [building, setBuilding] = useState(null);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setEvents([]);
        if (!show)
            setBuilding(null);
    }, [show])

    useEffect(() => {
        if (!show) return;
        setLoading(true);
        fetch(`${import.meta.env.VITE_SERVER_URL}/events/building/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                setLoading(false);
                console.log("FETCH EVENTS", data);
            })
    }, [show, id]);

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
        if (!id || !show) return;
        buildings.find((b) => {
            if (b.id === id) {
                setBuilding(b);
            }
        });
    }, [id, show])

    return (
        <div className={`${show ? 'absolute' : 'hidden'} top-0 left-0 w-full h-full bg-white md:bg-black/25 flex items-center justify-center z-20 duration-[200ms] transition-all animate-fade-fast`}>
            <div ref={container} className='w-full h-fit md:w-4/5 my- px-2 lg:w-3/5 overflow-auto'>
                <div className="flex flex-col z-50 h-fit w-full h-full">
                    <div className="flex justify-center md:justify-between items-center bg-white md:border-2 md:border-black md:rounded-xl md:py-4 px-4 shadow-none md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-8 md:mt-0">
                        <div className="hidden md:block w-12 flex items-center justify-center">
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
                            {building?.img ? <img className='rounded-xl max-h-[300px] md:min-h-[400px] w-full object-cover' src={building.img} alt="" />
                                : <div className='w-full h-[300px] flex items-center justify-center'>
                                    <SquareLoader color='#000' size={50} loading={loading} />
                                </div>}
                        </div>
                        <div className='bg-white w-full md:py-4 px-4 rounded-2xl md:border-2 border-black shadow-none md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
                            <h4 className='font-display font-semibold text-2xl my-2'>Descripción</h4>
                            <p>En este edificio suelen dar mayormente clases de ISC y IDI.</p>
                        </div>
                    </div>
                    <div className='md:border-0 shadow-none s:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-black md:rounded-2xl mt-4 min-h-18 p-0'>
                        <div className="grid grid-cols-1 md:px-0 py-2">
                            {
                                events.length > 0 && events.map((event, i) => (
                                    <div key={`event#${i}`} className='w-full grid md:grid-cols-2 gap-4 m:pr-2 auto-rows-auto animate-fade-in'>
                                        <Event col={1} {...event} i={i} />
                                    </div>
                                ))
                            }
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
        </div>
    )
}

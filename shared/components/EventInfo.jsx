import { useEffect, useState, useRef } from 'react';
import buildings from '../data/buildings';
import { Icon } from '../ui/icons/Icon';
import { BackButton } from '../ui/BackButton';
import { events } from '../data/events';

export const EventInfo = ({ show, id, setShow }) => {

    const container = useRef(null);

    const [building, setBuilding] = useState(null);

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
        <div className={`${show ? 'fixed' : 'hidden'} overflow-hidden top-0 left-0 w-full h-full bg-white md:bg-black/25 flex items-center justify-center z-20 duration-[200ms] transition-all`}>
            <div ref={container} className="fixed flex flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 h-fit w-full h-full md:h-fit md:w-4/5 lg:w-3/5">
                <div className="flex justify-center md:justify-between items-center bg-white md:border-2 md:border-black md:rounded-xl md:py-4 px-4 shadow-none md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-8 md:mt-0">
                    <div className="hidden md:block w-12 h-12 flex items-center justify-center">
                        <BackButton onClick={() => setShow(false)} />
                    </div>
                    <div className='text-center'>
                        <h3 className='font-display font-bold text-4xl'>{events[id].title}</h3>
                        {events[id].date && <p>{new Date(events[id].date).toLocaleDateString('es-mx')}</p>}
                    </div>
                    <div className='hidden md:block'>
                        <Icon building={events[id].icon} />
                    </div>
                </div>
                <div className={`w-full min-h-2/3 md:grow grid ${events[id].img ? 'md:grid-cols-2' : 'md:grid-cols-1'} md:gap-4 md:mt-4`}>
                    {
                        events[id].img &&
                        <div className='bg-white h-fit p-1.5 rounded-2xl m-4 md:m-0 border-2 border-black shadow-none md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
                            <img className='rounded-xl max-h-[300px] md:min-h-[400px] w-full object-cover' src={events[id].img} alt="" />
                        </div>

                    }
                    <div className='bg-white w-full md:py-4 px-4 rounded-2xl md:border-2 border-black shadow-none md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
                        <h4 className='font-display font-semibold text-2xl my-2'>Descripción</h4>
                        <p>{events[id].description}</p>
                    </div>
                </div>
                <div className='flex flex-col fixed bottom-0 w-full bg-white items-center'>
                    <div className='block md:hidden w-fit'>
                        <Icon building={events[id].icon} />
                    </div>
                    <div className="block md:hidden w-12 h-12 my-4 flex items-center justify-center ">
                        <BackButton onClick={() => setShow(false)} />
                    </div>
                </div>
            </div>
        </div>
    )
}
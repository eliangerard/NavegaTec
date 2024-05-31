import { useEffect, useState, useRef } from 'react';
import buildings from '../data/buildings';
import { Icon } from '../ui/icons/Icon';
import { BackButton } from '../ui/BackButton';
import { SquareLoader } from 'react-spinners';

export const EventInfo = ({ show, popup = false, id, setShow }) => {

    const [event, setEvent] = useState({
        title: '',
        description: '',
        img: '',
        where: null,
        when: ''
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!show) {
            setEvent({
                title: '',
                description: '',
                img: '',
                where: null,
                when: ''
            })
        }
    }, [show]);

    useEffect(() => {
        if (!id || !show) return;
        setLoading(true);
        fetch(`${import.meta.env.VITE_SERVER_URL}/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setEvent(data)
                setBuilding(data.where)
            })
    }, [id, show]);

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

    return (
        <div className={`${show ? (popup ? 'absolute' : 'fixed') : 'hidden'} overflow-hidden top-0 left-0 w-full h-full bg-white md:bg-black/25 flex items-center justify-center z-20 duration-[200ms] transition-all animate-fade-fast`}>
            <div ref={container} className="flex flex-col z-50 h-fit w-full h-full md:h-fit md:w-4/5 lg:w-3/5">
                <div className="flex justify-center md:justify-between items-center bg-white md:border-2 md:border-black md:rounded-xl md:py-4 px-4 shadow-none md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-8 md:mt-0">
                    <div className="hidden md:block w-12 flex items-center justify-center">
                        <BackButton onClick={() => setShow(false)} />
                    </div>
                    <div className='text-center'>
                        <h3 className='font-display font-bold text-4xl'>{event.title}</h3>
                        {event.when !== null && event.when !== '' && <p>{new Date(event.when).toLocaleDateString('es-mx')}</p>}
                    </div>
                    <div className='hidden md:block'>
                        <Icon building={event.where} />
                    </div>
                </div>
                <div className={`w-full min-h-2/3 md:grow grid ${event.img ? 'md:grid-cols-2' : 'md:grid-cols-1'} md:gap-4 md:mt-4`}>
                    {
                        event.img &&
                        <div className='bg-white max-h-[300px] md:min-h-[400px] p-1.5 rounded-2xl m-4 md:m-0 border-2 border-black shadow-none md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
                            <img className='rounded-xl h-full w-full object-cover' src={event.img} alt="" />
                        </div>

                    }
                    <div className='flex flex-col bg-white w-full max-h-[300px] md:min-h-[400px] md:py-4 px-4 rounded-2xl md:border-2 border-black shadow-none md:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
                        {
                            loading ?
                                <div className='w-full h-full py-36 flex items-center justify-center'>
                                    <SquareLoader color='#000000' size={50} />
                                </div>
                                :
                                <>
                                    <h4 className='font-display font-semibold text-2xl my-2'>{event.description ? 'Descripción' : ''}</h4>
                                    <div className='md:overflow-y-auto grow'>
                                        <p className='text-pretty hyphens-auto'>{event.description}</p>
                                    </div>
                                </>
                        }
                    </div>
                </div>
                <div className='flex flex-col fixed bottom-0 w-full bg-white items-center'>
                    <div className='block md:hidden w-fit'>
                        <Icon building={event.icon} />
                    </div>
                    <div className="block md:hidden w-12 h-12 my-4 flex items-center justify-center ">
                        <BackButton onClick={() => setShow(false)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

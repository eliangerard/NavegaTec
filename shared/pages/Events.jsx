import { Link } from 'react-router-dom'
import { Icon } from '../ui/icons/Icon'
import { Event } from '../ui/Event'
import { useState, useEffect } from 'react'
// import { events } from '../data/events'

export const Events = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/events/`)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);
    

    return (
        <>
            <header className='fixed left-0 top-0 z-20 bg-white flex justify-center items-center p-4 w-full md:border-b-2 border-black'>
                <div className="flex justify-between items-center w-full max-w-screen-xl">
                    <div>
                        <h1 className='text-4xl font-bold font-serif'>Anuncios</h1>
                        <p className='font-medium'>¡Consulta aquí lo que está pasando en el Tec!</p>
                    </div>
                    <div className='text-center'>
                        <p>{new Date().toLocaleDateString('es-ES', { weekday: 'long' })}</p>
                        <p className='font-serif text-2xl px-4 rounded-full border-2 border-black nt-shadow'>{new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' })}</p>
                    </div>
                </div>
            </header>
            <div className='w-full flex flex-col items-center relative'>
                <Link to="/" className='fixed bottom-4 md:left-4 md:top-1/2 w-12 z-20'>
                    <img src="/mapIcon.svg" alt="" />
                </Link>
                <div className='max-w-screen-xl w-full relative flex justify-center py-4 md:px-16'>
                    <div className="grid grid-cols-1 px-4 lg:grid-cols-2 pt-28 md:pt-24">
                        <div className='w-full grid md:grid-cols-2 gap-4 lg:pr-2 auto-rows-auto'>
                            {
                                events.filter((_, i) => i <= events.length / 2).map((event, i) => (
                                    <Event col={1} key={`event#${i}`} {...event} i={i} />
                                ))
                            }
                        </div>
                        <div className='w-full grid md:grid-cols-2 gap-4 pt-4 lg:pt-0 lg:pl-2 auto-rows-auto'>
                            {
                                events.filter((_, i) => i > events.length / 2).map((event, i) => (
                                    <Event col={2} key={`event#${i}`} {...event} i={i + (events.length / 2)} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <footer className='py-8'>Este es un footer</footer>
            </div>
        </>
    )
}

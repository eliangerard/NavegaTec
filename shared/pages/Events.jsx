import { Link } from 'react-router-dom'
import { Icon } from '../ui/icons/Icon'
import { Event } from '../ui/Event'

const events = [
    {
        type: 'event',
        title: 'Torneo de Fut',
        description: 'Va a ganar Baby Fire esta vez, lo prometo enserio!',
        icon: {
            type: 'soccer',
        },
        date: new Date().setDate(6),
        button: {
            text: 'Leer más',
        }
    },
    {
        type: "administrative",
        title: "JUNTA HOY",
        description: "El departamento de sistemas tendrá junta de 1:00 pm a 2:00 pm, las clases del departamento que entren en ese...",
        icon: {
            type: "building",
            short: "S",
        },
    },
    {
        type: "security",
        title: "JUNTA HOY",
        description: "El departamento de sistemas tendrá junta de 1:00 pm a 2:00 pm, las clases del departamento que entren en ese...",
        icon: {
            type: "building",
            short: "S",
        },
    },
    {
        type: 'event',
        title: 'Torneo de Fut',
        description: 'Va a ganar Baby Fire esta vez, lo prometo enserio!',
        icon: {
            type: 'soccer',
        },
        date: new Date().setDate(6),
        button: {
            text: 'Leer más',
        }
    },
    {
        type: "papers",
        title: "JUNTA HOY",
        description: "El departamento de sistemas tendrá junta de 1:00 pm a 2:00 pm, las clases del departamento que entren en ese...",
        icon: {
            type: "building",
            short: "S",
        },
    },
    {
        type: "security",
        title: "JUNTA HOY",
        description: "El departamento de sistemas tendrá junta de 1:00 pm a 2:00 pm, las clases del departamento que entren en ese...",
        icon: {
            type: "building",
            short: "S",
        },
    },
    {
        type: 'event',
        title: 'Torneo de Fut',
        description: 'Va a ganar Baby Fire esta vez, lo prometo enserio!',
        icon: {
            type: 'soccer',
        },
        date: new Date().setDate(6),
        button: {
            text: 'Leer más',
        }
    },
    {
        type: "administrative",
        title: "JUNTA HOY",
        description: "El departamento de sistemas tendrá junta de 1:00 pm a 2:00 pm, las clases del departamento que entren en ese...",
        icon: {
            type: "building",
            short: "S",
        },
    },
    {
        type: "administrative",
        title: "JUNTA HOY",
        description: "El departamento de sistemas tendrá junta de 1:00 pm a 2:00 pm, las clases del departamento que entren en ese...",
        icon: {
            type: "building",
            short: "S",
        },
    },
    {
        type: 'event',
        title: 'Torneo de Fut',
        description: 'Va a ganar Baby Fire esta vez, lo prometo enserio!',
        icon: {
            type: 'soccer',
        },
        date: new Date().setDate(6),
        button: {
            text: 'Leer más',
        }
    },
    {
        type: "administrative",
        title: "JUNTA HOY",
        description: "El departamento de sistemas tendrá junta de 1:00 pm a 2:00 pm, las clases del departamento que entren en ese...",
        icon: {
            type: "building",
            short: "S",
        },
    },
    {
        type: "administrative",
        title: "JUNTA HOY",
        description: "El departamento de sistemas tendrá junta de 1:00 pm a 2:00 pm, las clases del departamento que entren en ese...",
        icon: {
            type: "building",
            short: "S",
        },
    },
    {
        type: 'event',
        title: 'Torneo de Fut',
        description: 'Va a ganar Baby Fire esta vez, lo prometo enserio!',
        icon: {
            type: 'soccer',
        },
        date: new Date().setDate(6),
        button: {
            text: 'Leer más',
        }
    },
    {
        type: "security",
        title: "JUNTA HOY",
        description: "El departamento de sistemas tendrá junta de 1:00 pm a 2:00 pm, las clases del departamento que entren en ese...",
        icon: {
            type: "building",
            short: "S",
        },
    },
    {
        type: "papers",
        title: "JUNTA HOY",
        description: "El departamento de sistemas tendrá junta de 1:00 pm a 2:00 pm, las clases del departamento que entren en ese...",
        icon: {
            type: "building",
            short: "S",
        },
    },
    {
        type: 'event',
        title: 'Torneo de Fut',
        description: 'Va a ganar Baby Fire esta vez, lo prometo enserio!',
        icon: {
            type: 'soccer',
        },
        date: new Date().setDate(6),
        button: {
            text: 'Leer más',
        }
    },
    {
        type: "administrative",
        title: "JUNTA HOY",
        description: "El departamento de sistemas tendrá junta de 1:00 pm a 2:00 pm, las clases del departamento que entren en ese...",
        icon: {
            type: "building",
            short: "S",
        },
    },
    {
        type: "papers",
        title: "JUNTA HOY",
        description: "El departamento de sistemas tendrá junta de 1:00 pm a 2:00 pm, las clases del departamento que entren en ese...",
        icon: {
            type: "building",
            short: "S",
        },
    },
]

export const Events = () => {
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
                <Link to="/" className='absolute left-0 top-1/2 bg-white m-2 px-4 py-2 rounded-lg border-2 border-zinc-200 z-20'>Mapa</Link>
                <div className='max-w-screen-xl w-full relative flex justify-center py-4'>
                    <div className="grid grid-cols-1 px-4 md:grid-cols-2 pt-28 md:pt-24">
                        <div className='w-full grid md:grid-cols-2 gap-4 md:pr-2 auto-rows-auto'>
                            {
                                events.filter((_, i) => i < events.length / 2).map((event, i) => (
                                    <Event col={1} key={`event#${i}`} {...event} i={i} />
                                ))
                            }
                        </div>
                        <div className='w-full grid md:grid-cols-2 gap-4 pt-4 md:pt-0 md:pl-2 auto-rows-auto'>
                            {
                                events.filter((_, i) => i >= events.length / 2).map((event, i) => (
                                    <Event col={2} key={`event#${i}`} {...event} i={i} />
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

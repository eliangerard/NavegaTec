/* eslint-disable react/prop-types */
import { EventInfo } from "../components/EventInfo";
import { Icon } from "./icons/Icon"
import { useState } from 'react';

export const Event = ({ _id, title, where, when, button, description, type, i, col }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <>
            {showInfo && <EventInfo show={showInfo} setShow={setShowInfo} id={_id} />}
            <div
                className={`flex flex-col justify-between ${(col === 1 ? (i % 3 == 0 || i == 0) : ((i - 1) % 3 == 0)) ? 'sm:col-span-2 min-h-52' : 'col-span-1 min-h-80'} ${type === 'administrative' ? 'bg-purple' : type === 'security' ? 'bg-red' : type === 'papers' ? 'bg-green' : ''} p-4 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black`}
                onClick={() => setShowInfo(true)}
                >
                <div>
                    <div className="flex">
                        {type === 'events' && <Icon building={where} />}
                        {type === 'events' &&
                            <div className='ml-2'>
                                <h3 className='text-lg font-display font-semibold'>{title}</h3>
                                {when && <p className='text-xs '>
                                    {`${new Date(when).toLocaleDateString('es-ES', { weekday: 'long' })}`}
                                </p>}
                            </div>
                        }
                    </div>
                    {type !== 'events' && <h3 className='text-xl font-bold font-display text-center'>{title}</h3>}
                    <p className={`my-1 text-ellipsis`}>
                        {description}
                    </p>
                </div>
                {type !== 'events' &&
                    <div className="w-full flex justify-center">
                        <Icon building={where} className='h-20 my-2' />
                    </div>
                }
                <div className='flex justify-between w-full items-end'>
                    {button && <button className='bg-red border-2 rounded-full h-8 border-black px-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] max-w-32 font-serif'>
                        <p className="text-truncate w-full h-full">
                            {button}
                        </p>
                    </button>}
                    {when &&
                        <div className="justify-self-end">
                            <p className='text-center'>vie</p>
                            <div className='rounded-full bg-purple border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] h-8 w-8 flex items-center justify-center font-serif'>6</div>
                        </div>
                    }
                </div>

            </div>
        </>

    )
}

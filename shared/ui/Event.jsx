/* eslint-disable react/prop-types */
import { EventInfo } from "../components/EventInfo";
import { Icon } from "./icons/Icon"
import { useState } from 'react';

export const Event = ({ _id, popup = false, title, where, when, button, description, type, i, col }) => {
    const [showInfo, setShowInfo] = useState(false);
    const large = (col === 1 ? (i % 3 == 0 || i == 0) : ((i - 1) % 3 == 0));

    return (
        <>
            {showInfo && <EventInfo popup={popup} show={showInfo} setShow={setShowInfo} id={_id} />}
            <div
                className={`animate-fade flex flex-col justify-between ${ large ? 'sm:col-span-2 h-[250px]' : 'col-span-1 h-[380px]'}  ${type === 'administrative' ? 'bg-purple' : type === 'security' ? 'bg-red' : type === 'papers' ? 'bg-green' : type === 'warning' ? 'bg-yellow' : 'bg-white'} p-4 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black`}
                onClick={(e) => {
                    e.stopPropagation();
                    setShowInfo(true);
                }}
            >
                <div>
                    <div className="flex">
                        {large && <Icon className="h-12 my-0" building={where} />}
                        {large &&
                            <div className='ml-2'>
                                <h3 className='text-xl font-display font-bold'>{title.toUpperCase()}</h3>
                                {when && <p className='text-xs '>
                                    {`${new Date(when).toLocaleDateString('es-ES', { weekday: 'long' })}`}
                                </p>}
                            </div>
                        }
                    </div>
                    {!large && <h3 className='text-3xl font-display font-bold text-center text-ellipsis w-full truncate h-8'>{title.toUpperCase()}</h3>}
                    <p className={`${large ? 'max-h-[75px] text-left line-clamp-3' : 'h-[140px] text-center line-clamp-6'} w-full my-2 text-pretty hyphens-auto`}>
                        {description}
                    </p>
                </div>
                {!large &&
                    <div className="w-full flex justify-center">
                        <Icon building={where} className='h-20 my-2' fontSize="text-3xl"/>
                    </div>
                }
                <div className='flex justify-between w-full items-end'>
                    {button && <button className='bg-red border-2 rounded-full h-8 border-black px-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-fit font-serif'>
                        <p className="w-fit">
                            {button}
                        </p>
                    </button>}
                    {when &&
                        <div className="justify-self-end flex flex-col items-center">
                            <p className='text-center'>{
                                `${new Date(when).toLocaleDateString('es-ES', { weekday: 'long' }).substring(0,3)}`
                            }</p>
                            <div className='rounded-full bg-purple border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] h-8 w-8 flex items-center justify-center font-serif'>
                                {new Date(when).getDate()}
                            </div>
                        </div>
                    }
                </div>

            </div>
        </>

    )
    //Testing workflow
}

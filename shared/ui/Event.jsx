/* eslint-disable react/prop-types */
import { Icon } from "./icons/Icon"

export const Event = ({ title, icon, date, button, description, type, i, col }) => {
    return (
        <div
            className={`flex flex-col justify-between ${(col === 1 ? (i % 3 == 0 || i == 0) : ((i + 1) % 3 == 0)) ? 'col-span-2' : 'col-span-1'} ${type === 'administrative' ? 'bg-purple' : type === 'security' ? 'bg-red' : type === 'papers' ? 'bg-green' : ''} p-4 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black`}>
            <div>
                <div className="flex">
                    {type === 'event' && <Icon building={icon} />}
                    {type === 'event' &&
                        <div className='ml-2'>
                            <h3 className='text-lg font-display font-semibold'>{title}</h3>
                            {date && <p className='text-xs '>
                                {`${new Date(date).toLocaleDateString('es-ES', { weekday: 'long' })}`}
                            </p>}
                        </div>
                    }
                </div>
                {type !== 'event' && <h3 className='text-xl font-bold font-display text-center'>{title}</h3>}
                <p className='my-1 text-ellipsis'>
                    {description}
                </p>
            </div>
            {type !== 'event' &&
                <div className="w-full flex justify-center">
                    <Icon building={icon} className='h-16 my-8' />
                </div>
            }
            <div className='flex justify-between w-full items-end'>
                {button && <button className='bg-red border-2 rounded-full h-8 border-black px-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] max-w-32 font-serif'>
                    <p className="text-truncate w-full h-full">
                        {button.text}
                    </p>
                </button>}
                {date &&
                    <div className="justify-self-end">
                        <p className='text-center'>vie</p>
                        <div className='rounded-full bg-purple border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] h-8 w-8 flex items-center justify-center font-serif'>6</div>
                    </div>
                }
            </div>

        </div>
    )
}

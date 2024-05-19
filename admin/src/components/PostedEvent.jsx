import { useState } from "react";
import { Icon } from "../../../shared/ui/icons/Icon"
import { Trash } from "../../../shared/ui/icons/Trash"
import { api } from "../helpers/api";

export const PostedEvent = ({event : e, refresh}) => {
    const [active, setActive] = useState(e.active);
    const [deleting, setDeleting] = useState(false);

    const handleActive = () => {
        setActive(prev => !prev);
        api(`events/${e._id}`, 'PATCH', {active: !active}).then(() => refresh());
    }

    const handleDelete = () => {
        setDeleting(true);
        api(`events/${e._id}`, 'DELETE').then(() => refresh());
    }

    return (
        <div draggable className={`h-[400px] w-[230px] flex flex-col m-2 my-4 ${deleting ? 'opacity-50' : ''} transition-all`}>
            <div className="h-10 border-4 border-b-0 border-black rounded-t-3xl nt-shadow mx-6 flex justify-center items-center">
                <button className="rounded-full border-[3px] border-black p-1 h-8 flex items-center justify-between"
                    onClick={handleActive}
                >
                    <div className={`rounded-full h-5 w-5 border-[3px] border-black ${active ? 'bg-green' : 'bg-zinc-400'}`}
                    ></div>
                    <p className="text-sm text-center ml-1 mr-3 w-12 font-medium">{active ? 'Activo' : 'Inactivo'}</p>
                </button>
                <button className="ml-4"
                    onClick={handleDelete}
                >
                    <Trash className="h-6" />
                </button>
            </div>
            <div className={`col-span-4 ${e.type === 'administrative' ? 'bg-purple' : e.type === 'security' ? 'bg-red' : e.type === 'papers' ? 'bg-green' : e.type === 'warning' ? 'bg-yellow' : 'bg-white'} border-4 grow max-w-1/2 border-black rounded-lg nt-shadow p-4 flex flex-col justify-between items-center`}>
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold font-display text-center mb-4">{e.title}</h2>
                    <p className="">{e.description}</p>
                </div>
                <div className="flex flex-col items-center">
                    {e.where != '' && <Icon className='w-24 max-h-20' building={e.where} />}
                    {e.button.length > 0 && <a target="_blank" href={e.link} className="bg-red rounded-full px-6 text-lg h-fit border-[3px] border-black nt-shadow w-fit mt-8 font-serif">{e.button}</a>}
                </div>
            </div>
        </div>
    )
}

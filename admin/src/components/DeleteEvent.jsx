import { useState } from "react";
import { Event } from "../../../shared/ui/Event"
import { Icon } from "../../../shared/ui/icons/Icon"
import { api } from "../helpers/api";
import { SquareLoader } from "react-spinners";

export const DeleteEvent = ({ event, setShow, refresh }) => {
    const [loading, setLoading] = useState(false);

    const handleDelete = () => {
        setLoading(true);
        api(`events/${event._id}`, 'DELETE').then(() => {
            setLoading(false);
            setShow(false);
            refresh();
        });
    }

    return (
        <div className="animate-fade fixed top-0 left-0 w-full h-full z-50 bg-black/25 flex items-center justify-center">
            <div className="max-w-screen-lg w-full">
                <div className="flex w-full">
                    <div className="w-[250px]">
                        <Event {...event} />
                    </div>
                    <div className="relative bg-white nt-shadow border-4 ml-2 border-black flex flex-col flex-1 rounded-lg items-center justify-center">
                        <div className="flex flex-col items-center h-fit w-10/12">
                            <Icon className="h-24 mb-4" building={6} />
                            <p className="text-3xl font-bold font-serif">¿Quieres borrarlo?</p>
                            <p className="my-2 mb-4">Una vez eliminado no se podrá recuperar</p>
                            <button className="bg-green font-serif py-2 w-8/12 border-[3px] border-black rounded-lg text-xl nt-shadow-sm"
                                onClick={() => setShow(false)}
                            >Cancelar</button>
                            <button className="bg-red my-2 font-serif py-2 w-8/12 border-[3px] border-black rounded-lg text-xl nt-shadow-sm"
                                onClick={handleDelete}
                            >Eliminar</button>
                        </div>
                        {loading &&
                            <div className="animate-fade absolute top-0 left-0 h-full bg-white/75 w-full flex items-center justify-center">
                                <SquareLoader color="#000" size={50} loading={loading}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

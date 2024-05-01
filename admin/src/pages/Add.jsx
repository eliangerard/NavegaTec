import { useState } from "react"
import { SchoolMap } from "../../../shared/components/SchoolMap"
import { useNavigate } from "react-router-dom"
import { InitializeEvent } from "../components/InitializeEvent";
import { BackButton } from "../../../shared/ui/BackButton";
import { FillEvent } from "../components/FillEvent";

export const Add = () => {

    const navigate = useNavigate();
    const [step, setStep] = useState(3);
    const [events, setEvents] = useState([...Array(5).fill(null)]);


    return (
        <>
            <SchoolMap />
            {step != 3 ? <div className={`fixed overflow-hidden top-0 left-0 w-full h-full bg-black/25 flex items-center justify-center z-20 duration-[200ms] transition-all`}>
                <div className="fixed flex flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 h-fit min-w-fit w-3/5 max-w-screen-lg bg-white rounded-2xl border-4 border-black nt-shadow items-center justify-center p-12">

                    {step == 1 && <InitializeEvent />}
                    {step == 2 && <FillEvent setStep={setStep} />}

                </div>
            </div > :
                <div className="fixed right-0 top-0 h-full bg-white w-[600px] z-20 border-l-4 border-black p-4 text-center">
                    <h1 className="font-serif text-4xl font-bold ">Editorial</h1>
                    <p>Arrastra, activa o desactiva del mapa o elimina algún anuncio.</p>
                    <div className="flex flex-wrap p-2">
                        {events.map((e, i) => (
                            <div className="flex-1 h-[400px] flex flex-col m-2 my-4" key={i}>
                                <div className="h-10 border-4 border-b-0 border-black rounded-t-3xl mx-4 flex justify-center items-center">
                                    <button className="rounded-full border-2 border-black h-8 w-32 flex items-center">
                                        <div className="rounded-full h-6 w-6 border-2 border-black bg-green ml-0.5 mr-3"></div>
                                        activo
                                    </button>
                                    <button className="ml-4">B</button>
                                </div>
                                <div className="bg-purple grow rounded-lg border-4 border-black nt-shadow">

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

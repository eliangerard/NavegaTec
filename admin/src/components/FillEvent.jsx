import { BackButton } from "../../../shared/ui/BackButton"

export const FillEvent = ({setStep}) => {
    return (
        <>
            <div className="absolute top-8 left-8">
                <BackButton onClick={() => setStep(1)} />
            </div>
            <h1 className="text-5xl text-center font-display font-bold">Aviso</h1>
            <p>¿Qué mostrará tu anuncio?</p>
            <div className="grid grid-cols-10 w-fit grow gap-6 py-4">
                <div className="col-span-4 bg-yellow border-2 border-black rounded-lg nt-shadow">

                </div>
                <div className="col-span-5 flex flex-col">
                    <input type="text" className="border-2 mb-3 border-black rounded-3xl nt-shadow px-2 h-10 focus:outline-0" placeholder="Título del aviso" />
                    <textarea className="border-2 mb-3 resize-none border-black rounded-3xl nt-shadow p-2 grow" type="text" placeholder="Descripción" />
                    <input type="text" className="border-2 mb-3 border-black rounded-3xl nt-shadow px-2 h-10 focus:outline-0" placeholder="Título del botón" />
                    <input type="text" className="border-2 border-black rounded-3xl nt-shadow px-2 h-10 focus:outline-0" placeholder="Link" />
                </div>
                <div className="flex flex-col justify-between items-center">
                    <p className="my-2">¿Dónde?</p>
                    <button className="bg-purple h-16 w-16 rounded-3xl border-2 border-black border-dashed"></button>
                    <p className="my-2">¿Cuándo?</p>
                    <button className="bg-purple h-16 w-16 border-2 border-black"></button>
                    <p className="my-2">Imágen</p>
                    <button className="bg-purple h-16 w-16 rounded-xl border-2 border-black">+</button>
                    <button className="bg-red rounded-full px-4 h-fit w-full border-2 border-black nt-shadow mt-4 w-fit">Añadir</button>
                </div>
            </div>

        </>

    )
}

export const InitializeEvent = () => {
    return (
        <>
            <h1 className="text-5xl text-center font-serif font-bold">Editorial</h1>
            <p className="text-center text-xl font-medium">¿Qué tipo de anuncio desea agregar?</p>
            <div className="grid grid-cols-2 gap-4 w-full h-2/3 mt-12">
                <div className="flex flex-col">
                    <h2 className="font-display font-bold text-3xl text-center">CASUAL</h2>
                    <div className="flex flex-col justify-center text-center rounded-lg border-2 border-black nt-shadow p-4 grow mt-2">
                        <button className="my-2">EVENTOS</button>
                        <button className="my-2">ACTIVIDADES</button>
                        <button className="my-2">APOYOS</button>
                        <button className="my-2">RECONOCIMIENTOS</button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-display font-bold text-3xl text-center">URGENTES</h2>
                    <div className="grid grid-cols-2 gap-2 grow mt-2">
                        <button className="border-2 border-black nt-shadow h-full w-full rounded-lg bg-purple">DIRECCIÓN</button>
                        <button className="border-2 border-black nt-shadow h-full w-full rounded-lg bg-green">TRÁMITES</button>
                        <button className="border-2 border-black nt-shadow h-full w-full rounded-lg bg-red">SEGURIDAD</button>
                        <button className="border-2 border-black nt-shadow h-full w-full rounded-lg bg-yellow">AVISOS</button>
                    </div>
                </div>
            </div>
        </>
    )
}

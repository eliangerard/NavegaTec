export const Events = () => {
    return (
        <>
            <header className='flex justify-center items-center p-4 w-full border-b-2 border-black'>
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
            <div className='w-full flex justify-center'>
                <div className='max-w-screen-xl w-full'>

                </div>
            </div>
        </>
    )
}

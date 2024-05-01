import arrow from '../assets/arrow.svg';

export const BackButton = ({onClick}) => {
    return (
        <button className='bg-yellow rounded-full h-8 w-8 p-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
            onClick={onClick}
        >
            <img src={arrow} alt="" />
        </button>
    )
}

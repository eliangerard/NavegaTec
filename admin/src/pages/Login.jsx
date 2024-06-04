import { useContext } from "react";
import { SchoolMap } from "../../../shared/components/SchoolMap"
import { UserContext } from "../context/UserProvider";
import msLogo from '../assets/ms.svg'
import mapBg from '../assets/map-bg.png'
import icon from '../assets/icon.png'

export const Login = () => {

    const { user } = useContext(UserContext);
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");
    console.log(error);

    return (

        <>
            {!user?.logged &&
                <div className='animate-fade fixed top-0 left-0 w-full h-full bg-black/25 z-20'>
                    <div className='flex items-center overflow-hidden border-4 nt-shadow min-h-fit min-w-fit rounded-lg bg-white border-black  absolute z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                        <div className="relative flex items-center justify-center h-[400px] w-[450px]">
                            <img className="absolute h-full w-full w-fit object-cover" src={mapBg} alt="" />
                            <img className="absolute p-6 z-20" src={icon} alt="" />
                        </div>
                        <div className="p-12 w-full flex flex-col items-center">
                            <div className="w-[350px]">
                                <h1 className='font-serif text-5xl font-bold'>Inicia Sesión</h1>
                                <div className='w-full items-center'>
                                    <a
                                        className='flex border-zinc-400 border-2 p-3 text-center font-medium items-center mt-8 mb-4'
                                        href={`https://login.microsoftonline.com/4bc0e4bd-b054-4eb1-a4d3-ef13dc805095/oauth2/v2.0/authorize?client_id=a3a4079a-bf27-42d2-99c0-7a30e2739694&scope=a3a4079a-bf27-42d2-99c0-7a30e2739694/.default offline_access&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code&response_mode=query`}
                                    >
                                        <img className="w-8" src={msLogo} alt="" />
                                        <p className="text-zinc-500 text-sm px-3">Ingresa con tu correo institucional</p>
                                    </a>
                                </div>
                                {error && <p className='text-red w-full text-center'>{error}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            }
            <SchoolMap display={false}>
            </SchoolMap>
        </>
    )
}

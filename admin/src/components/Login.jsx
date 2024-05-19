import { useContext } from "react";
import { SchoolMap } from "../../../shared/components/SchoolMap"
import { UserContext } from "../context/UserProvider";
import msLogo from '../assets/ms.svg'

export const Login = () => {

    const { user } = useContext(UserContext);
    console.log("EA", user);

    return (

        <>
            {!user?.logged &&
                <div className='fixed top-0 left-0 w-full h-full bg-black/25 z-20'>
                    <div className='flex flex-col items-center border-4 nt-shadow p-12 w-1/3 min-h-fit min-w-fit rounded-lg bg-white border-black  absolute z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                        <h1 className='font-serif text-4xl font-bold text-center'>Inicia Sesión</h1>
                        <div className='grow flex items-center'>
                            {/* <MicrosoftLogin
                        clientId={"a3a4079a-bf27-42d2-99c0-7a30e2739694"}
                        authCallback={(error, response, msal) => console.log(error, response, msal)}
                        tenantUrl='https://login.microsoftonline.com/4bc0e4bd-b054-4eb1-a4d3-ef13dc805095'
                        redirectUri='http://localhost:5173/redirect/'
                    /> */}
                            <a
                                className='flex border-zinc-400 border-2 p-3 text-center font-medium items-center mt-8 mb-4'
                                href='https://login.microsoftonline.com/4bc0e4bd-b054-4eb1-a4d3-ef13dc805095/oauth2/v2.0/authorize?
                        client_id=a3a4079a-bf27-42d2-99c0-7a30e2739694
                        &scope=a3a4079a-bf27-42d2-99c0-7a30e2739694/.default offline_access
                        &redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fredirect%2F
                        &response_type=code
                        &response_mode=query
                        '
                            >
                                <img className="w-8" src={msLogo} alt="" />
                                <p className="text-zinc-500 px-3">Ingresa con tu cuenta institucional</p>
                            </a>
                        </div>
                    </div>
                </div>
            }
            <SchoolMap display={false}>
            </SchoolMap>
        </>
    )
}

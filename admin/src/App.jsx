import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { SchoolMap } from '../../shared/components/SchoolMap'
import { Events } from '../../shared/pages/Events'
import { Add } from './pages/Add'
import { useEffect, useState } from 'react'
import MicrosoftLogin from 'react-microsoft-login'
import { Redirect } from './pages/Redirect'

function App() {

	const [events, setEvents] = useState([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_SERVER_URL}/events/`)
			.then(res => res.json())
			.then(data => setEvents(data))
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/redirect/*' element={<Redirect/>} />
				<Route path="/" element={
					<>

						<div className='fixed top-0 left-0 w-full h-full bg-black/25 z-20'>
							<div className='flex flex-col items-center border-4 nt-shadow p-12 w-1/3 h-1/3 rounded-lg bg-white border-black  absolute z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
								<h1 className='font-serif text-4xl font-bold text-center'>Inicia Sesión</h1>
								<div className='grow flex items-center'>
									<MicrosoftLogin
										clientId={"a3a4079a-bf27-42d2-99c0-7a30e2739694"}
										authCallback={(error, response, msal) => console.log(error, response, msal)}
										tenantUrl='https://login.microsoftonline.com/4bc0e4bd-b054-4eb1-a4d3-ef13dc805095'
										redirectUri='https://navegadmin.vercel.app/redirect/'
										withUserData
									/>
								</div>
							</div>
						</div>
						<SchoolMap disabled>
						</SchoolMap>
					</>

					// <SchoolMap events={events}>
					// 	<Link to={'/add'} className='fixed top-6 right-24 py-2 border-2 px-2 rounded-lg'>
					// 		Nuevo
					// 	</Link>
					// </SchoolMap>
				} />
				<Route path="/add" element={<Add events={events} setEvents={setEvents} />} />
				<Route path="/events" element={<Events events={events} />} />

			</Routes>

		</BrowserRouter>
	)
}

export default App

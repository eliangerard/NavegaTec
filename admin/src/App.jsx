import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { SchoolMap } from '../../shared/components/SchoolMap'
import { Events } from '../../shared/pages/Events'
import { Add } from './pages/Add'
import { useEffect, useState } from 'react'

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
				<Route path="/" element={
					<SchoolMap events={events}>
						<Link to={'/add'} className='fixed top-6 right-24 py-2 border-2 px-2 rounded-lg'>
							Nuevo
						</Link>
					</SchoolMap>
				} />
				<Route path="/add" element={<Add events={events} setEvents={setEvents} />} />
				<Route path="/events" element={<Events events={events} />} />

			</Routes>

		</BrowserRouter>
	)
}

export default App

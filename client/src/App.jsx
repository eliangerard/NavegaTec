import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SchoolMap } from '../../shared/components/SchoolMap';
import { Events } from '../../shared/pages/Events';
import { useEffect, useState } from 'react';

export default function App() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_SERVER_URL}/events/`)
			.then(res => res.json())
			.then(data => setEvents(data))
	}, []);

	return (
		<BrowserRouter basename={import.meta.env.VITE_PATH_BASENAME}>
			<Routes>
				<Route path='/' element={<SchoolMap events={events}/>} />
				<Route path='/events' element={<Events events={events}/>} />
			</Routes>
		</BrowserRouter>
	);
}
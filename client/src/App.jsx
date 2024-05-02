import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SchoolMap } from '../../shared/components/SchoolMap';
import { Events } from '../../shared/pages/Events';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SchoolMap/>} />
				<Route path='/events' element={<Events/>} />
			</Routes>
		</BrowserRouter>
	);
}
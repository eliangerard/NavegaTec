import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SchoolMap } from '../../shared/components/SchoolMap';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SchoolMap/>} />
			</Routes>
		</BrowserRouter>
	);
}
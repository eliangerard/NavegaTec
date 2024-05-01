import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SchoolMap } from '../../shared/components/SchoolMap'
import { Events } from './pages/Events'
import { Add } from './pages/Add'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SchoolMap />} />
				<Route path="/add" element={<Add/>} />
				<Route path="/events" element={<Events />} />

			</Routes>
			
		</BrowserRouter>
	)
}

export default App

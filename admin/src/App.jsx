import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Redirect } from './pages/Redirect'
import { UserProvider } from './context/UserProvider'
import { VerifySession } from './middlewares/VerifySession'

function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path='/redirect/*' element={<Redirect />} />
					<Route path='/*' element={<VerifySession />} />
				</Routes>
			</UserProvider>
		</BrowserRouter >
	)
}

export default App

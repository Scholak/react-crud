import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const Home = React.lazy(() => import('./pages/Home'))
const Create = React.lazy(() => import('./pages/Create'))
const Edit = React.lazy(() => import('./pages/Edit'))
const Show = React.lazy(() => import('./pages/Show'))
const Delete = React.lazy(() => import('./pages/Delete'))

const App = () => {
  return (
		<React.Suspense fallback='loading...'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/create' element={<Create />} />
					<Route path='/edit/:id' element={<Edit />} />
					<Route path='/show/:id' element={<Show />} />
					<Route path='/delete/:id' element={<Delete />} />
				</Routes>
			</BrowserRouter>
		</React.Suspense>
	)
}

export default App

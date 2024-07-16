import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/Pages/Home'
import DashboardPage from './components/Pages/Dashboard'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/Pages/Home'
import DashboardPage from './components/Pages/Dashboard'
import CoinPage from './components/Pages/Coin'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path='/coin/:id' element={<CoinPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
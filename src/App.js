import React from 'react'
import UserLayout from './Components/Layout/UserLayout'
import AdminLayout from './Components/Layout/AdminLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserLayout />}>
        <Route index element={<Home />} />
        </Route>
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

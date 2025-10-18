import React from 'react'
import UserLayout from './Components/Layout/UserLayout'
import AdminLayout from './Components/Layout/AdminLayout'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Topbar from './Components/Layout/Topbar'

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/user" element={<UserLayout />} />
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

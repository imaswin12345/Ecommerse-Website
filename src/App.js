import React from 'react'
import UserLayout from './Components/Layout/UserLayout'
import AdminLayout from './Components/Layout/AdminLayout'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Common/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/user" element={<UserLayout />} />
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import "./App.css"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import { Routes, Route, Navigate } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Signup from "./components/signup/Signup"
import Login from "./components/login/Login"
import Type from "./components/type/Type"
import TypeDetail from "./components/typeDetail/TypeDetail"
import { useSelector } from 'react-redux'
import Create from "./components/create/Create"

function App() {
  const { user } = useSelector((state) => state.auth)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path='/create' element={user ? <Create /> : <Navigate to='/login' />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
        <Route path='/types/:type' element={user ? <Type /> : <Navigate to='/login' />} />
        <Route path='/typeDetail/:id' element={user ? <TypeDetail /> : <Navigate to='/login' />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

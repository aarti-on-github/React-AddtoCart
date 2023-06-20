import { useState } from 'react'
import './App.css'
import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter,Route, Routes,redirect} from "react-router-dom" //React router-dom for installation npm i react-router-dom
import {ToastContainer}from "react-toastify"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Cart from "./components/Cart"   
import Notfound from './components/Notfound'

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <ToastContainer/>
        <Navbar/>
          <Routes> 
         <Route path="/cart" element={<Cart/>}/>
         <Route path='/Not-found'element={<Notfound/>}/>
         <Route  path="/" element={<Home/>}/>
          <Route path='*'element={<Notfound/>}/>
          </Routes> 
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

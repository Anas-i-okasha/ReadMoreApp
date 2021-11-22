import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from './Components/Dashboard/dashboard';
import Home from './Components/Home/home'
import Articles from './Components/Articles/Articles'
import Navbar from './Components/Navbar/navbar';
 
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes> 
       <Route exact path="/" element={<Home/>}/> 
       <Route path="/articles" element={<Articles/>} />
       <Route path="/dash" element={<Dashboard/>}/>
        </Routes>
      
    </BrowserRouter>
  )
}

export default App

import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/dashboard";
import Home from "./Components/Home/home";
import Articles from "./Components/Articles/Articles";
import Navbar from "./Components/Navbar/navbar";
import Login from "./Components/login/login";
import Register from "./Components/register/register";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/dash" exact element={<Dashboard />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

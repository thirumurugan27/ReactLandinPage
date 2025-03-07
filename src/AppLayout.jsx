import React from 'react'
import Service from "./Service";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";
import {Routes, Route } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
        <NavBar />
      <Routes>
        <Route path="/ReactLandinPage" element={<Home />} />
        <Route path="/ReactLandinPage/home" element={<Home />} />
        <Route path="/ReactLandinPage/aboutus" element={<Aboutus />} />
        <Route path="/ReactLandinPage/contactus" element={<Contactus />} />
        <Route path="/ReactLandinPage/services" element={<Service />} />
        <Route path="/ReactLandinPage/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default AppLayout
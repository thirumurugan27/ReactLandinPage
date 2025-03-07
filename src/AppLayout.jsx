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
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/services" element={<Service />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default AppLayout
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./Service";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import NavBar from "./NavBar";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/services" element={<Service />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React from 'react'
import { Link,Route } from 'react-router-dom'

const NavBar = () => {
  return (

    <div>

        <div className="navbar">
            <h1 className='companyname'>GrowMore</h1>
          <ul>
            <li><Link to="/ReactLandinPage/"><button >Home</button> </Link></li>
            <li><Link to="/ReactLandinPage/aboutus"> <button>AboutUs </button></Link></li>
            <li><Link to="/ReactLandinPage/services"> <button>Services</button> </Link></li>
            <li><Link to="/ReactLandinPage/contactus"> <button>ContactUs</button> </Link></li>
            <li><Link to ="/ReactLandinPage/login"><button className='loginbutton'>Login</button></Link></li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar
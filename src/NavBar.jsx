import React from 'react'
import { Link,Route } from 'react-router-dom'

const NavBar = () => {
  return (

    <div>

        <div className="navbar">
            <h1 className='companyname'>GrowMore</h1>
          <ul>
            <li><Link to="/"><button >Home</button> </Link></li>
            <li><Link to="/aboutus"> <button>AboutUs </button></Link></li>
            <li><Link to="/services"> <button>Services</button> </Link></li>
            <li><Link to="/contactus"> <button>ContactUs</button> </Link></li>
            <li><Link to ="login"><button className='loginbutton'>Login</button></Link></li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar
import React from 'react'
import { Link ,Route} from 'react-router-dom'


const Home = () => {

  return (
    <div  className='outhomepage'>
        
        <div className="homepage">
            <h1 className='head'>We Help To <br />Build Your Business</h1>
            <p>Together the four of them set off to the Emerald City to find </p><p>the wizard in hopes that he could bestow upon them these </p><p>virtues and find a way for Dorothy to go.</p>
            <Link to="/ReactLandinPage/login"><button>Get Started</button></Link>
        </div>
        

    </div>
  )
}

export default Home
import React from 'react'
import {BrowserRouter as Routes, Route} from 'react-router' 
import Navbar from './Components/Navbar'

import Home from './Pages/Home/home'
import About from './Pages/About/about'
import Contact from './Pages/Contact/contact.jsx'
import House from './Pages/Houses/house'
import HouseDetails from './Pages/Houses/housedetails'
import SignUp from './auth/signup'
import SignIn from './auth/signin'

const App = () => {
  return (
    <div className='bg-blue-300'>

      <Navbar/>

        <Routes>
          <Route path='/contact' element = {<Contact/>}/>
        </Routes>

    </div>
  )
}

export default App
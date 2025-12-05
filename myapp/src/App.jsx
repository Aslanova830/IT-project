import {Routes, Route, useLocation} from 'react-router-dom' 
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Home from './Pages/Home/home'
import About from './Pages/About/about'
import Contact from './Pages/Contact/contact'
import House from './Pages/Houses/house'
import HouseDetails from './Pages/Houses/housedetails'
import SignUp from './auth/signup'
import Login from  './auth/signin'

const App = () => {
  const location = useLocation();


 const hideNavbar = location.pathname === "/" || location.pathname === "/login";
 const hideFooter = location.pathname === "/" || location.pathname === "/login";
  return (
    <div>
      

      {!hideNavbar && <Navbar />}

        <Routes>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/' element = {<SignUp/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/house' element = {<House/>}/>
          <Route path='/housedetails' element = {<HouseDetails/>}/>
        </Routes>
      {!hideFooter && <Footer/>}
    </div>
  )
}

export default App
import {Routes, Route} from 'react-router-dom' 
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import House from './Pages/Houses/House'
import HouseDetails from './Pages/Houses/HouseDetails'
import SignUp from './auth/signup'
import SignIn from './auth/signin'

const App = () => {
  return (
    <div>

      <Navbar/>

        <Routes>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/signup' element = {<SignUp/>}/>
          <Route path='/signin' element = {<SignIn/>}/>
          <Route path='/house' element = {<House/>}/>
          <Route path='/housedetails' element = {<HouseDetails/>}/>
        </Routes>

      <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer'
import CreateLogo from './Pages/CreateLogo/CreateLogo'
import Expert from './Pages/Expert/Expert'
import BrandKit from './Pages/BrandKit/BrandKit';
import Contact from './Pages/Contact/Contact';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Logomaker' element={<CreateLogo/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Experts' element={<Expert/>}/>
          <Route path='/BrandKit' element={<BrandKit/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}


export default App;

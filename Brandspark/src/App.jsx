import React, {useState,useEffect} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home/Home'
import  Expertsignup from './Pages/Expertsignup'
import Footer from './Components/Footer'
import CreateLogo from './Pages/CreateLogo/CreateLogo'
import Expert from './Pages/Expert/Expert'




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
     </Routes>
      
      </BrowserRouter>
    
     
    
     
     
     
      
      
    </div>
  )
}


export default App;

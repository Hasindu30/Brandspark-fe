import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  
  return (
    <div>
      <Navbar/>
      
    </div>
  )
}
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Expertsignup from './Pages/Expertsignup';
import Home from './Pages/Home';

function App() {
  return (
    <Home />

   /* <>
     <Router>
      <Routes>
      <Route path='/Home' exact element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup/>}/>
       
      </Routes>
    </Router> 

    </> */
  );

}

export default App;

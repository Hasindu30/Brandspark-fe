import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Pages/LoginSignup/Signup'
import Login from './Pages/LoginSignup/Login';
import Home from './Pages/Home/Home'
import CreateLogo from './Pages/CreateLogo/CreateLogo'
import Expert from './Pages/Expert/Expert'
import BrandKit from './Pages/BrandKit/BrandKit';
import Contact from './Pages/Contact/Contact';
import Chatbot from './Components/Chatbot/Chatbot';
import Brandname from './Pages/Brandname/Brandname';
import Help from './Pages/Contact/Help/Help';
import Expertsignup from './Pages/LoginSignup/Expertsignup';
import Sidebar from './Pages/onlinegpt/sidebar/Sidebar';
import Main from './Pages/onlinegpt/Main';
import ContextProvider from './Pages/onlinegpt/context/Context.jsx'

import Generator from './Pages/BrandKit/Generator.jsx';
import SocialProfileGigs from './Pages/BrandKit/MarketingTools/SocialProfileGigs.jsx';
import Designer from './Pages/BrandKit/MarketingTools/Designer.jsx';
import OrderForm from './Pages/BrandKit/MarketingTools/OrderForm.jsx';
import SPGenerator from './Pages/BrandKit/MarketingTools/Social Profile/SPGenerator.jsx';

import Generatelogo from './Pages/CreateLogo/Generatelogo.jsx';





const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Logomaker' element={<CreateLogo/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Experts' element={<Expert/>}/>
          <Route path='/BrandKit' element={<BrandKit/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Brandname' element={<Brandname/>}/>
          <Route path='/Help' element={<Help/>}/>
          <Route path='/expertsign' element={<Expertsignup/>}/>
          <Route path='/onlinegpt' element={<Main/>}/>
          <Route path='/brandname' element={<Brandname/>}/>

          <Route path="/generator" element={<Generator />} />
          <Route path='/spgigs' element={<SocialProfileGigs />}/>
          <Route path='/designer' element={<Designer />}/>
          <Route path='/orderform' element={<OrderForm />}/>
          <Route path='/spgenerator' element={<SPGenerator />}/>

          <Route path='/genlogo' element={<Generatelogo/>}/>
          
          


       </Routes>
        <Chatbot/>
        

      </BrowserRouter>
      
    </div>
  )
}


export default App;

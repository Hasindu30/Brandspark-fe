
import React from 'react';

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Expertsignup from './Pages/Expertsignup';
import Home from './Pages/Home';
import CreateLogo from './Pages/CreateLogo';

function App() {
  return (
    <CreateLogo />

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

import './App.css';
import General from './startup/pages/General_landing'
import Landing from './startup/pages/landingPage'
import Family from './startup/pages/familyLanding'

import Login from './startup/pages/login'
import Signup from './startup/pages/signup'

import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<General/>}></Route>
      <Route path='/Landing' element={<Landing/>}></Route>
      <Route path='/Family' element={<Family/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

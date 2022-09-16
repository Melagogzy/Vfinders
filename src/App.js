import React from 'react';
import { BrowserRouter, Routes,Route,  } from 'react-router-dom';

import './App.css';
import './mainStyle.css';
import About from './Pages/About/Blocks/About'
import Signup from './Pages/Signup';
import SignIn from './Pages/Signin';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              
             <Route  path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/signup" element={<Signup />} />
             <Route path="/signin" element={<SignIn />} />
             
              </Routes>
         </BrowserRouter>
       
         

    </div>
  );
}

export default App;

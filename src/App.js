import React from 'react';
import { BrowserRouter, Routes,Route,  } from 'react-router-dom';

import './App.css';
import './mainStyle.css';
import About from './Pages/About/Blocks/About'
import Signup from './Pages/Signup';
import SignIn from './Pages/Signin';
import Home from './Pages/Home/Home';
import Freelancer_dashboard from './Pages/Freelance_dashboard/Freelancer_dashboard';
import Client_dashboard from './Pages/Client_dashboard/Client_dashboard';
import Freelancer_Profile from './Pages/Freelancer_Profile/Freelancer_profile'
import Freelancer_membership_connect from './Pages/Freelancer_Membership_Connect/Freelancer_membership_connect';
import Wallet from './Pages/Wallet/Wallet';
import Contact_info from './Pages/Contact_Info/Contact_Info';
import Client_Job_Post from './Pages/Client_Job_Post/Client_Job_Post';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              
             <Route  path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/signup" element={<Signup />} />
             <Route path="/signin" element={<SignIn />} />
             <Route path="/freelancer_dashboard" element={<Freelancer_dashboard />} />
             <Route path="/client_dashboard" element={<Client_dashboard />} />
             <Route path="/freelancer_Profile" element={<Freelancer_Profile />} />
             <Route path="/freelancer_membership_connect" element={<Freelancer_membership_connect />} />
             <Route path="/wallet" element={<Wallet />} />
             <Route path="/contact_info" element={<Contact_info />} />  
             <Route path="/client_job_post" element={<Client_Job_Post />} /> 
             
             
             
             
              </Routes>
         </BrowserRouter>
       
         

    </div>
  );
}

export default App;

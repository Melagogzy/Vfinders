import React, {useState} from "react";
import './styles.css';

import { useLoginMutation } from "../../Features/api/apiSlice";

const SignIn =()=>{
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const [login, {isLoading, isError, isSuccess, data, error}] = useLoginMutation()
const HandleLogin = (e) => {
  e.preventDefault()
  const payload = {
    email: email,
    password: password
  }
  console.log(payload)
  login(payload)
  console.log(data)
}
    return(
        <div>
                          
        <div class="form  uk-margin-top" >
        
     
        
        <div class="input-container ic2">
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">Email </label>
        </div>
  
        <div class="input-container ic2">
          <input  value={password} onChange ={(e)=>{setPassword(e.target.value)}} id="password" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="FirstName" class="placeholder">Password</label>
        </div>

    
        <div className='uk-grid' data-uk-grid>
           <div className='uk-width-1-5'>
                  <div class="input-container ic2">
          <input id="confirmPassword" type="checkbox" class="uk-checkbox"  placeholder=" " />
                  <div class="cut cut-short"></div>
                 </div>
           </div>
  
           <div className='uk-width-4-5'>
                      <div class="input-container ic2">
                     
                      <p className="formTerms uk-text-left">Yes, I understand and agree to the value-finders Terms of Service, 
                      including the User Agreement and Privacy Policy.</p>
                  </div>
            </div>
  
        </div>

    
        <button onClick={HandleLogin} type="submit" value="Submit" class="submit">Sign Up</button>
      </div> 
        </div>
    )
} 

export default SignIn

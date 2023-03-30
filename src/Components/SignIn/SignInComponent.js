import React, {useState} from "react";
import './styles.css';
import useApi from "../../Apis/useApi";
import { useMutation } from "@tanstack/react-query";

const SignIn =()=>{
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const {pageError, setPageError} = useState('')

const { login,  errorMsg } = useApi();
const { mutate } = useMutation(login)


const HandleLogin = (e) => {
  e.preventDefault()
  const payload = {
    email: email,
    password: password
  }

 mutate(payload)
}
    return(
        <div>
                          
        <div class="form  uk-margin-top" >
          {/* error alert but hide after 3 secords */}

        {
          errorMsg ? <div className="uk-alert-danger" data-uk-alert>
          <a className="uk-alert-close" data-uk-close></a>
          <p>{errorMsg}</p>
        </div> : null
        }
       
        



  



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

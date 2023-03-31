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

    
       

    
        <button onClick={HandleLogin} type="submit" value="Submit" class="submit">Login</button>
      </div> 
        </div>
    )
} 

export default SignIn

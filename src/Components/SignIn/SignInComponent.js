import React from "react";
import './styles.css'






const SignIn =()=>{
    return(
        <div>
                          
        <div class="form  uk-margin-top" >
        
     
        
        <div class="input-container ic2">
          <input id="email" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">Email </label>
        </div>
  
        <div class="input-container ic2">
          <input id="password" class="input" type="text" placeholder=" " />
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

    
        <button type="submit" value="Submit" class="submit">Sign Up</button>
      </div> 
        </div>
    )
} 

export default SignIn

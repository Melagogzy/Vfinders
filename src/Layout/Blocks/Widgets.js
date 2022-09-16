import React from "react";
import { Link } from "react-router-dom";
import facebook from '../../images/Facebook.png'
import google from '../../images/google.png'

function FacebookBtn (){
    return(

        <div className='facebookBtn uk-margin-small-top'>
        <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" data-uk-grid>
             <div>
                 <div class="fbIcon uk-margin-small-top"><img src={facebook} /></div>
             </div>
             <div>
                 <div class="uk-margin-small-top">Continue with Facebook</div>
             </div>
             <div>
                 <div class=""></div>
             </div>
         </div>
        </div>
        )

    }


function GoogleBtn (){
    return(
     <div className='googleBtn uk-margin-small-top'>
     <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" data-uk-grid>
          <div>
              <div class="fbIcon uk-margin-small-top"><img src={google} /></div>
          </div>
          <div>
              <div class="uk-margin-small-top">Continue with Facebook</div>
          </div>
          <div>
              <div class=""></div>
          </div>
      </div>
     </div>
    )
       }

       function MainBtn (){
           return(
               <Link to="">Support</Link>
           )
       }


function SignUp (){
    return(
        <div>
                          
        <div class="form  uk-margin-top" >
        
          <div className='uk-grid' data-uk-grid>
           <div className='uk-width-1-2'>
                  <div class="input-container ic2">
                  <input id="email" class="input" type="text" placeholder=" " />
                  <div class="cut cut-short"></div>
                  <label for="lastName" class="placeholder">First Name</label>
                 </div>
           </div>
  
           <div className='uk-width-1-2'>
                      <div class="input-container ic2">
                      <input id="email" class="input" type="text" placeholder=" " />
                      <div class="cut cut-short"></div>
                      <label for="lastName" class="placeholder">Last  Name</label>
                  </div>
            </div>
  
        </div>
        
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

        <div class="input-container ic2">
          <input id="confirmPassword" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="FirstName" class="placeholder">Confirm Password</label>
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






function SignIn (){
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


export  { FacebookBtn, GoogleBtn, SignUp, SignIn };


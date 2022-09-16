import React from "react";
import logo from '../images/logo.JPG'
import tech_guy from '../images/tech_guy.jpg'
import { FacebookBtn, SignUp, GoogleBtn } from "../Layout/Blocks/Widgets";


function Register () {
    return(
        <div>
              <div className="uk-grid">
                      <div className="uk-width-1-2@s">
                          <div className="logo uk-padding">
                              <img src= {logo}/>
                          </div>
                          <div><h2>Sign up to find work you love</h2></div>
                          <div className="uk-padding  uk-text-center">
                          <FacebookBtn /> 
                          <GoogleBtn />
                          <div className="uk-margin-left"><SignUp /> </div>
                          </div>

                           <div className="uk-grid" data-uk-grid>
                               <div className="uk-width-1-2@s">
                                   <p>hello</p>
                               </div>

                               <div className="uk-width-1-2@s">
                                   <p>hello</p>
                               </div>
                           </div>



                      </div>





                      <div className="uk-width-1-2@s">
                          <div
                                                    
                            style={{ backgroundImage: `url(${tech_guy})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                           
                            height: '130vh'
                    }}
                          >

                          </div>
                      </div>
              </div>
        </div>
    )
}


export default Register






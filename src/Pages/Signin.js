import React from "react";
import logo from '../images/logo.JPG'
import afro_woman from '../images/5123.webp'
import { FacebookBtn, SignIn, GoogleBtn } from "../Layout/Blocks/Widgets";


function Login () {
    return(
        <div>
              <div className="uk-grid">
                      <div className="uk-width-1-2@s">
                          <div className="logo uk-text-center uk-padding">
                              <img src= {logo}/>
                          </div>
                          <div><h2>Sign into your account</h2></div>
                          <div className="uk-padding  uk-text-center">
                          <FacebookBtn /> 
                          <GoogleBtn />
                          <div className="uk-margin-left"><SignIn /> </div>
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
                                                    
                            style={{ backgroundImage: `url(${afro_woman})`,
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


export default Login






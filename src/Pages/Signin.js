import React from "react";
import logo from '../images/logo.JPG'
import afro_woman from '../images/5123.webp'
import  FacebookBtn  from "../Components/Facebook-btn/Facebook-btn";
import GoogleBtn from "../Components/Google-btn/Google-btn";
import SignIn from "../Components/SignIn/SignInComponent";
import '../mainStyle.css'


const Login = ()=> {
    return(
        <div>
              <div className="uk-grid">
                      <div className="uk-width-1-2@s">
                        <div className="">
                          <div className="logo uk-text-center uk-padding">
                              <img src= {logo}/>
                          </div>
                          <div><h2>Sign into your account</h2></div>
                          <div className="uk-padding  uk-text-center">
                          {/* <FacebookBtn />  
                          <GoogleBtn /> */}
                          <SignIn />
                        
                          </div>

                          </div>



                      </div>





                      <div className="uk-width-1-2@s">
                          <div
                                                    
                            style={{ backgroundImage: `url(${afro_woman})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                           
                            height: '100vh'
                    }}
                          >

                          </div>
                      </div>
              </div>
        </div>
    )
}


export default Login






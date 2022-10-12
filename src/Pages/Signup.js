import React from "react";
import logo from '../images/logo.JPG'
import tech_guy from '../images/tech_guy.jpg'
import  FacebookBtn  from '../Components/Facebook-btn/Facebook-btn'
import GoogleBtn from "../Components/Google-btn/Google-btn";
import SignUpComponent from "../Components/SignUp/SignUpComponent";


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
                          <SignUpComponent/>
                     
                          </div>

                       

                        



                      </div>





                      <div className="uk-width-1-2@s">
                          <div
                                                    
                            style={{ backgroundImage: `url(${tech_guy})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                           
                            height: '110vh'
                    }}
                          >

                          </div>
                      </div>
              </div>
        </div>
    )
}


export default Register






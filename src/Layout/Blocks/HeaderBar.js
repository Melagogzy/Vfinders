import {Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import mainLogo from './../../images/logo.JPG';
import './widgets.css'

import { Grid, Paper, Hidden, Divider, Drawer, ListItem, List, ListItemText, IconButton } from "@material-ui/core";


function HeaderBar(props){
    const [trasparent, setTrasparent] = useState(true);
  const [numberOfItems, setNumberOfItems] = useState("")
  
  window.addEventListener("scroll", (e) => {
    setTrasparent(window.scrollY === 0);
  });

  
  
  const [openDrawer, setOpendrawer] = useState(false);


return(
    <div className="uk-container">
          
        {/** DESKTOP NAV **/}
      <div className="uk-visible@l">
             <div
      component={Grid}
      container
      className="headerBar"
      elevation={1}
      square
      style={{
        background:
          !props.fillHeader && trasparent ? "transparent" : "rgba(0,0,0,0.93)",
      }}
    >
           <div className="uk-container">
             <div className="mainNavBar">
             

             <nav class="uk-navbar-container" data-uk-navbar>

             <div class="uk-navbar-left" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                      <Link to ="/"><img src= {mainLogo} className="logoStyle"/> </Link>
                  </div>


              
                  <div class="uk-navbar-center">
                 <nav class="stroke  "   >
                        <ul class="uk-navbar-nav ">
                            

                            <li>
                                <a href="#">Find Talent</a>
                                <div class="uk-navbar-dropdown">
                                    <ul class="uk-nav uk-navbar-dropdown-nav dropDown">
                                    <Link to ="/"><li class="uk-active "><a href="#"> Development & IT</a></li></Link>
                                       <Link to ="/"> <li className=""><a href="#">Design & Creative</a></li> </Link>
                                       <Link to ="/"> <li className=""><a href="#">Sales & Marketing</a></li> </Link>
                                       <Link to ="/"> <li className=""><a href="#">Writing & Translation</a></li> </Link>
                                       <Link to ="/"> <li className=""><a href="#">Admin & Customer Support</a></li> </Link>
                                       <Link to ="/"> <li className=""><a href="#">Finance & Accounting</a></li> </Link>
                                       <Link to ="/"> <li className=""><a href="#">HR & Training</a></li> </Link>
                                       <Link to ="/"> <li className=""><a href="#">Engineering & Architecture</a></li> </Link>
                                   
                                    </ul>
                                </div>
                            </li>



                            <li>
                                <a href="#">Find Work</a>
                                <div class="uk-navbar-dropdown">
                                    <ul class="uk-nav uk-navbar-dropdown-nav dropDown">
                                        
                                      <Link to = "/"><li class="uk-active "><a href="#">  Ways to Learn</a></li> </Link>
                                       <Link to ="/"> <li class="uk-active "><a href="#">   Find work for your skills</a></li></Link>
                                        <Link to = "/"><li className=""><a href="#">Find ways to promote yourself</a></li></Link>
                                      
                                    </ul>
                                </div>
                            </li>



                             <li>
                                <a href="#">Why Value Finders</a>
                                <div class="uk-navbar-dropdown">
                                    <ul class="uk-nav uk-navbar-dropdown-nav dropDown">
                                      
                                    <Link to ="/about-us">  <li class="uk-active "><a href="#">About Us</a></li> </Link>
                                      <Link to ="/about-us">  <li class="uk-active "><a href="#">How to Hire</a></li> </Link>
                                      <Link to ="/teacher" > <li className=""><a href="#"> How to find work</a></li> </Link>
                                      <Link to ="/blog">  <li className=""><a href="#">Blog</a></li> </Link>
                                       <Link to ="/contactus" > <li className=""><a href="#">Contact Us</a></li> </Link>
                                        {/**<li className=""><a href="#">Online programs FAQs</a></li> ***/}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        </nav>
                 </div> 


              <div class="uk-navbar-right ">
              <ul class="uk-navbar-nav">
                  <Link to="/signin"><li class="uk-active"><a href="">Login</a></li></Link>  
                  <Link to="/signup"><li class="uk-margin-left signUpBtn"><a href="">Sign Up</a></li></Link>  
                    
                </ul>
                 </div>
            </nav>






          </div>
        </div>

    </div>
    </div> {/** desktop nav ends here **/}




    
      {/*MOBILE NAV STARTS HERE*/}
      <div className="uk-hidden@l">
      <div
                  component={Grid}
                  container
                  className="headerBar"
                  elevation={1}
                  square
                  style={{
                    background:
                      !props.fillHeader && trasparent ? "transparent" : "rgba(0,0,0,0.93)",
                  }}
                >
                   
                        <div className="mobileNav">
                        <div className="" data-uk-grid>
                              <div className="uk-width-1-2">
                                    <div>
                                    <Link to ="/"><img src= {mainLogo} className="logoStyle"/> </Link>
                                    </div>
                              </div>

                              <div className="uk-width-1-2 ">
                                <div className="modalBtn">
                              <a class="uk-button uk-button-default  customBtn" data-uk-toggle="target: #offcanvas-flip" uk-icon="menu" uk-toggle></a>

                      <div id="offcanvas-flip" data-uk-offcanvas="flip: true; overlay: true">
                              <div class=" mobileMenuBar uk-offcanvas-bar">

                              <button class="uk-offcanvas-close" type="button" data-uk-close></button>





                               
                                     <div className="uk-margin-xlarge-top">
                             
                                     <nav id="menu">

                                                <ul class="parent-menu">

                                                    <li><a href="#">Programs</a>

                                                        <ul>

                                                           <Link to ="/virtualcourses"> <li><a href="#"> Virtual  One on One</a></li> </Link>

                                                          <Link to ="/techcamp-course" > <li><a href="#"> Tech Camp</a></li></Link>

                                                            <Link to ="/VirtualSmallGroup"><li><a href="#">Virtual Small Group</a></li></Link>

                                                            <Link to ="/schools"> <li><a href="#"> At School Location</a></li> </Link>

                                                           

                                                        </ul>

                                                    </li>


                                                    <li><a href="#">Courses</a>

                                                        <ul>
                                                            
                                                           <Link to="/computer-course"> <li><a href="#"> Computer Courses </a></li>  </Link>

                                                           <Link to="/coding-courses"> <li><a href="#"> Coding Courses </a></li>  </Link>

                                                          <Link to="/game-dev">  <li><a href="#">Game Dev Courses</a></li> </Link>

                                                            
                                       <Link to ="/courses"> <li className=""><a href="#"> All Courses</a></li></Link>
                                       <Link to="/maths-tutoring"> <li className=""><a href="#">Maths Courses</a></li> </Link>

                                                        </ul></li>


                                                        
                                                    <li><a href="#">Why CyberTeck</a>

                                                      <ul>

                                                          <Link to ="/about-us"><li><a href="#"> About Us</a></li> </Link>
                                                          
                                                          <Link to ="/teacher"><li><a href="#"> Our Teachers</a></li> </Link>

                                                         <Link to ="/blog"> <li><a href="#">Blog</a></li> </Link>

                                                         <Link to ="/contactus"> <li><a href="#">  Contact Us</a></li></Link>

                                                        {/** <Link to =""> <li><a href="#">Online programs FAQs</a></li></Link> * */}

                                                    </ul>
                                                </li>

                                                



                                          </ul>

                          </nav>

                          </div>

                       
                                                          










                             </div>
                       </div>
                              </div>
                              
                              
                              
                              
                              </div>
                        </div>
                        </div>
      
      
      
      
       </div>
      </div>
   














    </div>
)


}

export default HeaderBar;
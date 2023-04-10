import react from 'react'
import Layout from '../../Layout/Layout'
import free_img from './../../images/Freelancer.png'
import rating from './../../images/star_rating.png'
import './styles.css'
import { Link } from 'react-router-dom'



const Freelancer_Profile= () =>{
     return(
       <Layout>
           <div class="uk-container uk-margin-large-top">

               <div className='row  uk-margin-top' style={{borderBottom:'2px solid #e7e9e9', padding:'10px', marginBottom:'0px'}}>
                    <div className='col-sm-6'>
                       <div className='uk-grid uk-grid-collapse ' data-uk-grid>
                           <div className='uk-width-1-2 '>
                            <img src={free_img} className="free_img"/>
                           </div>

                           <div className='uk-width-1-2 uk-margin-medium-top free_container'>
                               <p className='uk-text-left uk-text-bold moveLeft'>Jaywone Mighty</p>
                                    <div class="uk-flex uk-margin-small-top">
                                        
                                        <div class=" uk-text-small ">Abuja, Nigeria</div>
                                        <div class=" uk-margin-small-left uk-text-small">7:49 am local time</div>
                                </div>
                            </div>
                       </div>
                    </div>

                    <div className='col-sm-6 uk-margin-medium-top'>
                        <div className='uk-flex uk-flex-wrap'>
                             

                        </div>     
                     
                    </div>
               </div>


           <div className='container'>
                 <div className='row'>

                    {/**Left Side bar***/}
                      <div className='col-sm-4 ' >
                          <div className='uk-margin-top uk-text-left '>
                            <h5 className='uk-text-bold'>View Profile</h5>
                          </div>

                          <div className='uk-text-left' style={{backgroundColor:'#e7e9e9'}}>
                            <h6 className='uk-padding-small uk-text-bold'>Copy writer</h6>
                          </div>

                          
                          <div className='uk-flex'>
                            <div>
                                <h5 className='uk-text-bold'>120k</h5>
                                <p className='uk-text-small' style={{marginTop:'-20px'}}> Total Earnings </p>
                            </div>

                            <div className='uk-margin-left'>
                                
                            <h5 className='uk-text-bold'>6</h5>
                                <p className='uk-text-small' style={{marginTop:'-20px'}}> Total Jobs </p>
                            </div>


                            <div className='uk-margin-left'>
                                 
                                <h5 className='uk-text-bold'>56</h5>
                                <p className='uk-text-small' style={{marginTop:'-20px'}}> Total Hours </p>

                            </div>

                          </div>

                       <div className ="uk-margin-top" style={{ borderTop:'2px solid #e7e9e9'}}>
                            
                            {/**Availability**/}
                           <div className='uk-text-left uk-margin-top'>
                           <h5 className='uk-text-bold'>Hours per week</h5>
                           <p className='uk-text-small' style={{marginTop:'-10px'}}>More than 30 hrs/week</p>
                           </div>


                             {/**Language**/}
                             <div className='uk-text-left uk-margin-top'>
                           <h5 className='uk-text-bold'>Language</h5>
                           <p className='uk-text-small' style={{marginTop:'-10px'}}>English: Fluent</p>
                           </div>


                               {/**Language**/}
                               <div className='uk-text-left uk-margin-top'>
                           <h5 className='uk-text-bold'>Education</h5>
                           <p className='uk-text-small' style={{marginTop:'-10px'}}>Benue State University</p>
                           </div>


                               {/**Language**/}
                               <div className='uk-text-left uk-margin-top'>
                           <h5 className='uk-text-bold'>Verification</h5>
                           <p className='uk-text-small' style={{marginTop:'-10px'}}>ID Verified
                           </p>
                           </div>

                       </div>

                      </div>


                       
                    {/**Right main content***/}
                      <div className='col-sm-8 ' >
                        <div className=''>
                          <div className='row ' style={{borderLeft:'2px solid #e7e9e9', borderBottom:'2px solid #e7e9e9'}}>
                            
                           <div className='col-7'>

                             <h4 className='uk-text-bold uk-text-left uk-padding-small'>Copy writer with over 10 years experience</h4>
                            </div>

                            <div className='col-5 '>
                            <h4 className='uk-text-bold uk-padding-small'>N4000/ day</h4>
                           </div>


                           <div className='uk-text-left'>
                            <p className='uk-text-small uk-padding-small'>Having elevated the performance and profitability of diverse
                            organizations through  innovative and Interactive strategies, i 
                            would consider myself a detailed oriented individual with a passion for excellence.
                            As a  UI/UX designer and developer , i have assisted clients from all backgrounds
                             and industries to design, develop and implement thoughtful and impactful  Branding 
                             tools to help grow their business.

                            </p>

                            <p className='uk-text-small uk-padding-small'>Presently the founder and CEO propertyhub.ng. An interactive web portal for listing 
                            properties for sale, rent and lease, I am adept at listening to client’s needs, then
                             analyzing and implementing the best solution to deliver unrivaled service.</p>
                          </div>
                          </div>


                           {/**Work History**/}
                          <div className='row ' style={{borderLeft:'2px solid #e7e9e9', borderBottom:'2px solid #e7e9e9'}}>
                          <div className=''>
                             
                             <h4 className='uk-text-bold uk-text-left uk-padding-small'>Work History</h4>

                                

                           <div className="" style={{position:'relative',top:'-20px'}}>
                           <ul class=" uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
                                                <li ><a href="#" className="">Completed Jobs</a></li>
                                                <li><a href="#" className="">In Progress</a></li>
                             </ul>

                                       
                                        <ul class="uk-switcher uk-margin">

                                 {/*First Tab All courses*/}
                                 <li>
                                    <div className='uk-padding-small'>
                                        <h5 className='uk-text-left uk-text-bold ' style={{color:'#9CCF31'}}>Website developer</h5>
                                    </div>

                                    <div className='uk-flex'>
                                        <div className='rating'><img src={rating} /></div>
                                        <div className='uk-margin-left uk-text-small'><p>FEB 15, 2020 - April 20, 2022</p></div>
                                        
                                    </div>

                                     {/**Client review**/}
                                    <div className='uk-text-left uk-text-small uk-padding-small'>
                                        <p>Presently the founder and CEO propertyhub.ng. An interactive web portal for
                                        listing properties for sale, rent and lease, I am adept at listening to client’s
                                         needs, then analyzing and implementing the best solution to deliver unrivaled service.</p>

                                         <h6 className='uk-text-bold'>David Lee</h6>
                                    <p className='' style={{marginTop:'-15px'}}>Cyberteck Academy</p>
                                    </div>

                                    
                                    
                                               
                                 </li>

                                
                                {/*Second Tab to display Coding courses*/}
                                            <li>Text here</li>






                                            {/*Third Tab to display Game Dev courses*/}
                                            <li>Text here</li>
                                        </ul>
                                        </div>
                             
                             </div>
                          </div>



                          {/***Skill***/}
                          <div className='row ' style={{borderLeft:'2px solid #e7e9e9', borderBottom:'2px solid #e7e9e9'}}>
                          <div className=''>
                             
                             <h4 className='uk-text-bold uk-text-left uk-padding-small'>Skills</h4>

                                


                                   
                             
                             </div>
                          </div>

                         
                          </div>
                         
                          
                      </div>


                     

                   
                 </div>
           </div>








           </div>
       </Layout>
     )
}


export default Freelancer_Profile
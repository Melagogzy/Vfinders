import React from  'react'
import '../styles.css'



const FormFour = () =>{
    return(
         <div className='uk-container' style={{height:"70vh"}}>
              <div className='uk-grid' data-uk-grid>
                    <div className='uk-width-1-2@s'>
                         <div className='uk-padding uk-text-left'>
                            <h2>Tell us about your budget</h2>
                            <p>This will help us match you to talent within your range</p>
                         
                         </div>
                    </div>


                    <div className='uk-width-1-2@s'>
                        <div className='uk-text-left uk-padding'>   
                          
                        <div className="uk-margin-large-top">
                           <ul class=" uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
                                                <li ><a href="#" className="activeTabBtn">Hourly Rate</a></li>
                                                <li><a href="#" className="InactiveTabBtn">Project Budget</a></li>
                                             
                             </ul>

                                       
                                        <ul class="uk-switcher uk-margin">

                                 {/*First Tab All courses*/}
                                 <li>
                                 <div className='uk-flex'>
                                    <div className=''>
                                    <input class="uk-input form-input" type="text" placeholder="$13 " ></input> /hour
                                    </div>

                                    <div className='uk-margin-left'>
                                    <input class="uk-input form-input" type="text" placeholder="$27 " ></input> /hour
                                    </div>
                                </div>   
                                    
                                 </li>

                                  {/*Second Tab to display Coding courses*/}
                                    <li> 
                                         <div className=''>
                                    <input class="uk-input form-input" type="text" placeholder="Fixed Budget " ></input> 
                                    </div>
                                    
                                    </li>


                                        </ul>

                                         <p className='uk-text-small'>This is the average rate for similar projects</p>

                                         <p className='uk-margin-top uk-text-small'>Professionals tend to charge $13 - $27/hour (USD) for full stack development 
                                            projects like yours. Experts may charge higher rates</p>
                                        </div>
                        
                     </div>


                     <div className='uk-flex uk-padding'>
                            <div className=''>
                                    
                                <a href="" className='btn-form-ghost uk-margin-xlarge-top'>Back</a>
                            </div>

                  <div className='uk-margin-left'>
                     
                  <a href="" className='btn-form uk-margin-xlarge-top'>Next : Description</a>
                  </div>
                 </div>
                 </div>


                




              </div>
         </div>  
    )
}




export default FormFour
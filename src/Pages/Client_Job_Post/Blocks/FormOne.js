import React from  'react'
import '../styles.css'



const FormOne = () =>{
    return(
         <div className='uk-container' style={{height:"70vh"}}>
              <div className='uk-grid' data-uk-grid>
                    <div className='uk-width-1-2@s'>
                         <div className='uk-padding uk-text-left'>
                            <h2>Let's start with a strong headline.</h2>
                            <p>This helps your job post stand out to the right
                              candidates. It’s the first thing they’ll see,so
                               make it count!</p>
                         </div>
                    </div>


                    <div className='uk-width-1-2@s'>
                        <div className='uk-text-left uk-padding'>   
                           <p>Write a headline for your  post</p>

                                <form>
                                    <div class=" uk-margin-small-top">
                                        <input class="uk-input form-input" type="text" ></input>
                                    </div>
                                </form>
                     </div>

                     <div className='uk-padding uk-text-left'>
                        <h5 className='uk-text-bold'>Example Titles</h5>
                       <ul>
                        <li>Build a responsive Wordpress site with booking/payment functionality</li>
                        
                        <li>Graphic designer needed to design ad creative for multiple campaigns</li>
                        
                        <li>Facebook ad specialist needed for product launch</li>
                       </ul>

                     </div>

                     <div className='uk-text-left uk-padding'>
                        
                       <a href="" className='btn-form uk-margin-xlarge-top'>Next : Skills</a>
                     </div>


                     
 
                </div>
              </div>
         </div>  
    )
}




export default FormOne
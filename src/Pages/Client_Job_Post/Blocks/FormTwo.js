import React from  'react'
import '../styles.css'



const FormTwo = () =>{
    return(
         <div className='uk-container' style={{height:"70vh"}}>
              <div className='uk-grid' data-uk-grid>
                    <div className='uk-width-1-2@s'>
                         <div className='uk-padding uk-text-left'>
                            <h2>What are the main skills required for your work?</h2>
                         
                         </div>
                    </div>


                    <div className='uk-width-1-2@s'>
                        <div className='uk-text-left uk-padding'>   
                           <p>Search skills or add your own</p>

                           <form class="uk-search uk-search-default uk-margin-small-top">
                                <span data-uk-search-icon></span>
                                <input class="uk-search-input form-input-search" type="search" placeholder="Search" aria-label="Search"/>
                             </form>
                     </div>


                     <div className='uk-flex uk-padding'>
                            <div className=''>
                                    
                                <a href="" className='btn-form-ghost uk-margin-xlarge-top'>Back</a>
                            </div>

                  <div className='uk-margin-left'>
                     
                  <a href="" className='btn-form uk-margin-xlarge-top'>Next : Skope</a>
                  </div>
                 </div>
                 </div>


                




              </div>
         </div>  
    )
}




export default FormTwo
import React from  'react'
import '../styles.css'



const FormFive = () =>{
    return(
         <div className='uk-container' style={{height:"70vh"}}>
              <div className='uk-grid' data-uk-grid>
                    <div className='uk-width-1-2@s'>
                         <div className='uk-padding uk-text-left'>
                            <h2>Last step, start the conversation</h2>
                            <p className='uk-text-bold'>Talent are looking for:</p>
                            <p className='uk-margin-small-top'>clear expectations about your task or deliverables</p>
                            
                            <p className='uk-margin-small-top'>The skills required for your work, good communication</p>
                            
                            <p className='uk-margin-small-top'>Details about how you or your team like to work</p>
                         
                         </div>
                    </div>


                    <div className='uk-width-1-2@s'>
                        <div className='uk-text-left uk-padding'>   
                        <form>
    <fieldset class="uk-fieldset">

        <legend class="uk-legend uk-text-small">Add a title</legend>

        <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Web dev needed" aria-label="Input"/>
        </div>

       

        <div class="uk-margin">
        <legend class="uk-legend uk-text-small">Describe your job</legend>
            <textarea class="uk-textarea" rows="5" placeholder="Textarea" aria-label="Textarea"></textarea>
        </div>

        

       


    </fieldset>
</form>

                          
                     </div>


                     <div className='uk-flex uk-padding'>
                            <div className=''>
                                    
                                <a href="" className='btn-form-ghost uk-margin-xlarge-top'>Back</a>
                            </div>

                  <div className='uk-margin-left'>
                     
                  <a href="" className='btn-form uk-margin-xlarge-top'>Review Post</a>
                  </div>
                 </div>
                 </div>


                




              </div>
         </div>  
    )
}




export default FormFive
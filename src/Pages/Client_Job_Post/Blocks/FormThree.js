import React ,{ useState} from  'react'
import '../styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { setWizard } from '../../../State/wizard'


const FormThree = () =>{
     const[duration, setDuration] = useState('')
     const dispatch = useDispatch()
     
     const Next = () =>{
               dispatch(setWizard({stage: '3'}));
     }


    return(
         <div className='uk-container' style={{height:"70vh"}}>
              <div className='uk-grid' data-uk-grid>
                    <div className='uk-width-1-2@s'>
                         <div className='uk-padding uk-text-left'>
                            <h2>Next, estimate the scope of your work.</h2>
                            <p>Consider the size of your project and the time it will take</p>
                         
                         </div>
                    </div>


                    <div className='uk-width-1-2@s'>
                        <div className='uk-text-left uk-padding'>   
                           <p>Search skills or add your own</p>

                           <form class="uk-margin-small-top">
                           <label class="form-control">
                            <input value={duration} onChange={(e)=>{setDuration(e.target.value)}} type="radio" name="radio" />
                            Large
                            Longer term or complex initiatives (ex. design and build a full website)
                            </label>

                            <label class="form-control">
                            <input value={duration} onChange={(e)=>{setDuration(e.target.value)}} type="radio" name="radio" />
                                     Medium
                                     Well-defined projects (ex a landing page)
                            </label>


                            <label class="form-control">
                            <input value={duration} onChange={(e)=>{setDuration(e.target.value)}} type="radio" name="radio" />
                                     Small
                                     Quick and straightforward tasks (ex update text and images on a webpage)
                            </label>



                          

                             </form>
                     </div>


                     <div className='uk-flex uk-padding'>
                            <div className=''>
                                    
                                <a href="" className='btn-form-ghost uk-margin-xlarge-top'>Back</a>
                            </div>

                  <div onClick={()=>{Next()}} className='uk-margin-left'>
                     
                  <a href="" className='btn-form uk-margin-xlarge-top'>Next : Budget</a>
                  </div>
                 </div>
                 </div>


                




              </div>
         </div>  
    )
}




export default FormThree
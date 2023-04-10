import react from 'react'
import {Link } from 'react-router-dom'
import star_rating from './../../../images/star_rating.png'


const Job_post = () =>{
         return(
         <div className='uk-margin-medium-top  '>
 
              {/*Desktop View*/}
              <div className=''>
            <div >
                <h5 className='uk-text-left uk-text-bold Job_title uk-margin-left'>Create Company Logo</h5>

            <div className='uk-flex-wrap uk-flex'>
                {/*connects*/}
              <div className='div'>
              <Link to="/" class="button   uk-text-small"
                                style={{
                                backgroundColor:"#9CCF31",
                               
                                }}>  6 Connects</Link>
              </div>


                {/*Payment Verification*/}
               <div className='div'>
                <h5 className='uk-text-small uk-margin-small-left'>Payment Unverified</h5>
               </div>


                {/*Star rating*/}
              <div className='div'><img src={star_rating}/></div>



                {/*Amount spent*/}
              <div className='div'>
              <h5 className='uk-text-small uk-text-bold'>N240,000  spent</h5>
              </div>



                {/*Location*/}
              <div className='div'>
                
              <h5 className='uk-text-small uk-text-bold'><span className='fa fa-fw fa-house'></span>  Abuja</h5>
              </div>

              
                {/*Distance*/}
              <div className='div'>
                
              <h5 className='uk-text-small uk-text-bold uk-margin-small-left'>21km</h5>
              </div>
            </div>

            </div>





            {/*Second Row*/}
            <div className='uk-flex-wrap uk-flex uk-margin-small-top '>
                {/*Price*/}
              <div className='div'>
              
              <h5 className='uk-text-small uk-text-bold'>Fixed Price</h5>
              </div>


                {/*Skill Level*/}
               <div className='uk-margin-small-left'>
                <h5 className='uk-text-small uk-text-bold'>Intermediate</h5>
               </div>


                {/*Budget*/}
              <div className='uk-margin-small-left'>
                
              <h5 className='uk-text-small uk-text-bold'> Est.Budget: N2400</h5>
              </div>



                {/*Estimated Time*/}
              <div className='uk-margin-small-left'>
              <h5 className='uk-text-small uk-text-bold'> Est.Time: 2weeks</h5>
              </div>



                {/*Post Time*/}
              <div className='uk-margin-small-left'>
                
              <h5 className='uk-text-small uk-text-bold'> Posted 17mins.ago</h5>
              </div>

            </div>

            {/**Job Post Description */}
           <div className=''>
              <p className='uk-text-left uk-text-small  uk-margin-left'>
              Lorem ipsum dolor sit amet, iisque alienum eu sea, 
              cu usu duis aeque invidunt. Qui cu wisi decore dolorem.
              Ne praesent periculis vel. Aperiam detracto facilisi pri id,
              altera audire mei no, cu choro appareat reprehendunt qui.
              Sed alii patrioque no. Iudicabit efficiantur philosophia
              nec ea, impetus mnesarchum ei mel.
            </p>   
           </div>


           <div className='row'>
                              
           </div>


           </div>


          {/**Mobile**/}








         </div>
         
         )
}



export default Job_post;
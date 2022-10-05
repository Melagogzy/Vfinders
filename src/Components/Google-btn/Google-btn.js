import react from 'react'
import google from '../../images/google.png'
import './style.css'




const GoogleBtn = () =>{
    return(
     <div className='googleBtn uk-margin-small-top'>
     <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" data-uk-grid>
          <div>
              <div class="fbIcon "><img src={google} /></div>
          </div>
          <div>
              <div class="">Continue with Facebook</div>
          </div>
          <div>
              <div class=""></div>
          </div>
      </div>
     </div>
    )
       }

       export default GoogleBtn
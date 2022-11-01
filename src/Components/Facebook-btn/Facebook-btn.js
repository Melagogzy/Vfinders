import react from 'react'
import facebook from '../../images/Facebook.png'
import  './style.css'

const FacebookBtn = ()=>{
    return(

        <div className='facebookBtn uk-margin-small-top'>
        <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" data-uk-grid>
             <div>
                 <div class="fbIcon uk-margin-small-top"><img src={facebook} /></div>
             </div>
             <div>
                 <div class="fbBtnText uk-margin-small-top">Continue with Facebook</div>
             </div>
             <div>
                 <div class=""></div>
             </div>
         </div>
        </div>
        )

    }

    export default FacebookBtn
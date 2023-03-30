import React from "react";


const Sidebar_Menu = () => {
    return(
           <div>

                   <div >
                    <h5 className='uk-text-bold uk-text-left'>Billing & Payment</h5>
   
                    <div class="sidebar_C " style={{marginTop:'-10px'}}>
                       <a href="#home"><i class="uk-text-small"></i> My wallet</a>
                </div>
                </div>


                <p className='uk-text-bold uk-text-left uk-margin-top-remove'>User Settings </p>
                <div class="sidebar_C " style={{marginTop:'0px'}}>
                    
            <a href="#home"><i class="uk-text-small" ></i> Membership & Connect</a>
            <a href="#services"><i class="uk-text-small"></i> Contact Info</a>
            <a href="#clients"><i class="uk-text-small"></i> My Profile</a>
            <a href="#contact"><i class="uk-text-small"></i> Profile Settings</a>
            <a href="#clients"><i class="uk-text-small uk-margin-top"></i> Password & Security</a>
            <a href="#clients"><i class="uk-text-small uk-margin-top"></i> Get Paid</a>
            <a href="#clients"><i class="uk-text-small uk-margin-top"></i> Identity Verification</a>
            <a href="#clients"><i class="uk-text-small uk-margin-top"></i> Notification Settings</a>

            
       </div>
           </div>
    )
}


export default Sidebar_Menu
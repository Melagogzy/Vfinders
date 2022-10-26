import React from "react";
import './widgets.css'

const  footerBlock= ()=> {

    return(
        <div style={{backgroundColor:"#000"}}>
            <div className="mainFooter uk-container">
           <div  className="uk-grid " data-uk-grid>
                <div className="uk-width-1-4@s">
                    <div className=" uk-margin-medium-top">
                        <div><h6 className="light uk-text-left uk-text-bold">For clients</h6></div>
                    <ul>
                        <li><a href="">How to Hire</a></li>
                        <li><a href="">Talent Marketplace</a></li>
                        <li><a href="">Project Catalog</a></li>
                       
                   </ul> 
                    </div>
                </div>

                <div className="uk-width-1-4@s">
                <div className=" uk-margin-medium-top">
                        <div><h6 className="light uk-text-left uk-text-bold">For Talent</h6></div>
                    <ul>
                        <li><a href="">How to Find WOrk</a></li>
                        <li><a href="">Direct Contracts</a></li>
                        
                   </ul> 
                    </div>
                </div>

                <div className="uk-width-1-4@s">
                <div className=" uk-margin-medium-top">
                        <div><h6 className="light uk-text-left uk-text-bold">Resources</h6></div>
                    <ul>
                        <li><a href="">Help & Support</a></li>
                        <li><a href="">Success Stories</a></li>
                        <li><a href="">Blog</a></li>
                        
                   </ul> 
                    </div>
                </div>

                <div className="uk-width-1-4@s">
                <div className=" uk-margin-medium-top">
                        <div><h6 className="light uk-text-left uk-text-bold">Company</h6></div>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Investor Relations</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Trust, Safety & Security</a></li>
                        
                        
                   </ul> 
                    </div>
                </div>
           </div>
        </div>



        {/**Social Links**/}
        <div className="uk-container socialFooterDiv uk-margin-medium-top">
           <div className="uk-grid" data-uk-grid>
               <div className="uk-width-1-3@s">
               <div class="uk-flex">
                    <div class="uk-text-bold light">Follow Us</div>
                    <a href="" class="uk-icon-button uk-margin-medium-left  uk-margin-small-right" uk-icon="twitter"></a>
                    <a href="" class="uk-icon-button  uk-margin-small-right" uk-icon="facebook"></a>
                    <a href="" class="uk-icon-button" uk-icon="youtube"></a>
              </div>
               </div>

               <div className="uk-width-1-3@s">
                 
               </div>

               <div className="uk-width-1-3@s">
               
               </div>
         </div>
          </div>

         <div className="footerBottom ">
                   
               </div>



        </div>
    )
}


export default footerBlock
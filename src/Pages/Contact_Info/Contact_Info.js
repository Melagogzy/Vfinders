import React from "react";
import Sidebar_Menu from "../../Components/Sidebar_Menu/Sidebar_Menu";
import Layout from "../../Layout/Layout";
import { Link } from 'react-router-dom'





const Contact_info = () => {
     return(
         <Layout>

            <div className="uk-margin-xlarge-top">
                  <div className="uk-container">
                    <div className="row">
                    <div className="col-sm-4">

                    </div>

                    <div className="col-sm-8">
                    
                    <h2 className="uk-text-bold uk-text-left">Contact Info</h2>
                       </div>
                    </div>
                      <div className="row">
                          <div className="col-sm-4">
                              <Sidebar_Menu />
                          </div>

                          
                   {/***Main Content ***/}
                   <div className='col-sm-8'>


 
 <div className='box-shadow uk-padding uk-margin-large-bottom'>
     <div style={{borderBottom:'2px solid #e7e9e9', padding:'10px', marginBottom:'0px'}}>
         <h4 className='uk-text-left uk-text-bold'>Account</h4>
     </div>

       <div>
       <h6 className='uk-text-left  uk-margin-top uk-text-bold'>User Id</h6>
       <p className='uk-text-left ' style={{marginTop:'-10px'}}>Jaywon_236</p>
       </div>

       <div>
       <h6 className='uk-text-left  uk-margin-top uk-text-bold'>Name</h6>
       <p className='uk-text-left ' style={{marginTop:'-10px'}}>Jaywon Arolums</p>



       <div style={{borderBottom:'2px solid #e7e9e9', paddingBottom:'30px', marginBottom:'10px'}}>
       <h6 className='uk-text-left  uk-margin-top uk-text-bold'>Email</h6>
       <p className='uk-text-left ' style={{marginTop:'10px'}}>jaywone34@gmail.com</p>
       </div>
       </div>

      

       <div className='uk-text-left uk-margin-medium-top'>
         <div className='uk-flex'>
             
        <div> <Link to="/" className='button' style={{backgroundColor:'#9CCF31'}}>Buy Connects</Link></div>
        
        <div> <Link to="/" className='button_ghost uk-margin-left' >View connect history</Link></div>

         </div>
       </div>

 </div>
</div>
                      </div>
                  </div>
            </div>

         </Layout>
     )

}



export default Contact_info
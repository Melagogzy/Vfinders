import React from "react";
import guyBg from '../../../images/22.png'

function Fifth_Pane(){
    return(
          <div className="uk-margin-medium-top">
               <div className="container">
                    <div className="uk-grid uk-grid-collapse" data-uk-grid>
                       <div className="uk-width-1-2@s">
                       <div
                                style={{ backgroundImage: `url(${guyBg})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                             
                                height:'76vh'
                  }}
                           >
                               </div>
                       </div>

                       <div className="uk-width-1-2@s ">
                           <div style={{backgroundColor:'#3399fe'}} className="uk-padding">
                               <h5 className="uk-text-left light">FOR TALENTS</h5>
                               <h1 className="uk-text-left light">Find great work</h1>
                               <p className="uk-text-left light uk-text-bold">Meet clients you're excited to
                                work with and take your career or business to ne heights</p>

                                 <div className="uk-grid " data-uk-grid>
                                     <div className="uk-width-1-2">
                                          <p className="uk-text-left light">Find opportunities for every stage of your freelance career</p>
                                     </div>

                                     <div className="uk-width-1-2">
                                           <p className="uk-text-left light">Control when, where, and how you work</p>
                                     </div>
                                 </div>

                                 <div className="uk-text-left  uk-margin-large-top uk-margin-xlarge-bottom">
                                        <a href="" className="light">Find opportunities</a>
                                 </div>



                           </div>
                       </div>
                    </div>
               </div>
          </div>
    )
}


export default Fifth_Pane
import React from "react";
import heroBg from '../../../images/heroBg.png'

const Third_Pane = ()=>{
    return(
        <div className="uk-margin-large-top">
            <div className="uk-container"
              style={{ backgroundImage: `url(${heroBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              paddingBottom: '80px',
              height:'65vh'
}}
  >
                <div className="uk-container">
                  <div className="uk-grid" data-uk-grid>
                      <div className="uk-width-1-2@s">
                           <div className="uk-margin-large-top uk-padding">
                             <h5 className="uk-text-left light uk-text-bold">FOR CLIENTS</h5>
                             <h1 className="uk-text-left  light ">Find your desired
                            skill, just few clicks
                            away</h1>

                            <p className="light uk-margin-medium-top">Work with the largets network of independent professionals
                              and get things done-from quick turnarounds to big transformations</p>
                           </div>
                      </div>

                      <div className="uk-width-1-2@s">
                           <p>hello</p>
                      </div>
                  </div>

                  </div>
            </div>


            <div className="uk-container " style={{marginTop:'-100px'}}>
                  <div className="uk-grid" data-uk-grid>
                       <div className="uk-width-1-3@s">
                            <div style={{backgroundColor:'#9CCF31',padding:'20px', borderRadius:'10px', height:'auto'}}>
                                <h3 className="uk-text-left uk-margin-top light">Post a job request and wait</h3>
                                <p className="light uk-text-left">Skill Market Place</p>
                                
                            </div>
                       </div>

                       <div className="uk-width-1-3@s">
                       <div style={{backgroundColor:'#9CCF31',padding:'20px', borderRadius:'10px', height:'auto'}}>
                                <h3 className="uk-text-left uk-margin-top light">Receive offers from talents</h3>
                                <p className="light uk-text-left">Skill Market Place</p>
                                
                            </div>
                       </div>

                       <div className="uk-width-1-3@s">
                       <div style={{backgroundColor:'#9CCF31',padding:'20px', borderRadius:'10px', height:'auto'}}>
                                <h3 className="uk-text-left uk-margin-top light">Interview talents and engage</h3>
                                <p className="light uk-text-left">Screening</p>
                                
                            </div>
                       </div>
                  </div>
            </div>





        </div>
    )
}

export default Third_Pane
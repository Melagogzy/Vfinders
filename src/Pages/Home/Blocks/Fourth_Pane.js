import React from "react";
import sixtySeven from './../../../images/67.jpg'

const Fourth_Pane=()=>{
      return(
          <div className="uk-margin-large-top ">
            <div className="container" >
                    <div className="row " >    
                         
                     <div className="col-sm-7 "style={{backgroundColor: '#cecece'}}>
                     <div className="uk-padding">   
                         <div className=""><h1 className="uk-text-left uk-text-bold">A whole world of freelance talent at your fingertips</h1></div>


                            <div className="row uk-margin-large-top">
                                <div className="col-sm-1">
                                <span uk-icon="icon: location; ratio: 3.5"></span>
                               </div>

                            <div className="col-sm-11">
                                 <h4 className="uk-text-left uk-text-bold">Utmost Prosimity Consideration</h4>
                                 <p className="uk-text-left" style={{marginTop:'-15px'}}>Check any pro's work samples, client reviews, and identity verification</p>
                            </div>
                        </div>


                        <div className="row uk-margin-medium-top" style={{position:'relative',top:'-30px'}}>
                                <div className="col-sm-1">
                                <span uk-icon="icon:  future; ratio: 3.5"></span>
                               </div>

                            <div className="col-sm-11">
                                 <h4 className="uk-text-left uk-text-bold">Timely Remuneration</h4>
                                 <p className="uk-text-left" style={{marginTop:'-15px'}}>Check any pro's work samples, client reviews, and identity verification</p>
                            </div>
                        </div>



                        <div className="row uk-margin-medium-top" style={{position:'relative',top:'-50px'}}>
                                <div className="col-sm-1">
                                <span uk-icon="icon:  star; ratio: 3.5"></span>
                               </div>

                            <div className="col-sm-11">
                                 <h4 className="uk-text-left uk-text-bold">No cost until you hire</h4>
                                 <p className="uk-text-left" style={{marginTop:'-15px'}}>Check any pro's work samples, client reviews, and identity verification</p>
                            </div>
                        </div>



                        <div className="row uk-margin-medium-top" style={{position:'relative',top:'-70px'}} >
                                <div className="col-sm-1">
                                <span uk-icon="icon: check; ratio: 3.5"></span>
                               </div>

                            <div className="col-sm-11">
                                 <h4 className="uk-text-left uk-text-bold">Safe and secure</h4>
                                 <p className="uk-text-left" style={{marginTop:'-15px'}}>Check any pro's work samples, client reviews, and identity verification</p>
                            </div>
                        </div>




                        </div>
                   </div>
                      <div className="col-sm-5">
                      <div
                                style={{ backgroundImage: `url(${sixtySeven})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                             
                                height:'100vh'
                  }}
                           >
                               </div>
                      </div>

                   </div>
                </div>







          </div>
      )
}


export default Fourth_Pane
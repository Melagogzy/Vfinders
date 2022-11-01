import React from "react";
import code from '../../../images/code.png'
import writing from '../../../images/writing.png'
import design from '../../../images/design.jpg'
import music from '../../../images/music.png'
import transport from '../../../images/logistics.png'
import professional from '../../../images/professionalService.png'
import artisan from '../../../images/artisan.png'
import food from '../../../images/beauty.png'


const Second_Pane = ()=>{
    return(


           <div>

     


        <div className="uk-container uk-margin-large-top">
            <div><h1 className="uk-text-center uk-text-bold">Browse skill by category</h1></div>
            <div className="uk-margin-medium-top" >

            <div className="container">
                <div className="row">

                  <div className="col-sm-3">
                      <div class="iconContainer uk-margin-top">
                      <img src={code} className="indexIcon"/>
                        <p className="uk-margin-remove-top uk-text-bold">Programming & Tech</p>
                     </div>
                  </div>


                  <div className="col-sm-3">
                  <div class="iconContainer uk-margin-top ">
                    <img src={writing} className="indexIcon"/>
                        <p className="uk-margin-remove-top uk-text-bold">Writing & Translation</p>
                 </div> 
                  </div>

                  <div className="col-sm-3">
                    <div class="iconContainer uk-margin-top">
                    <img src={design} className="indexIcon"/>
                        <p className="uk-margin-remove-top uk-text-bold">Graphics & Design</p>
                    </div>
                  </div>

                  <div className="col-sm-3">
                  <div class="iconContainer uk-margin-top">
                    <img src={music} className="indexIcon"/>
                        <p className="uk-margin-remove-top uk-text-bold"> Music & Entertainment</p>
                 </div>  
                  </div>
                  </div>







                  <div className="row">

                  <div className="col-sm-3">
                  <div class="iconContainer uk-margin-top ">
                        <img src={transport} className="indexIcon"/>
                            <p className="uk-margin-remove-top uk-text-bold">Transport & Logistics</p>
                    </div>
                  </div>


                  <div className="col-sm-3">
                     <div class="iconContainer uk-margin-top ">
                        <img src={professional} className="indexIcon"/>
                            <p className="uk-margin-remove-top uk-text-bold">Professional Services</p>
                      </div> 
                  </div>

                  <div className="col-sm-3">
                    
                              <div class="iconContainer uk-margin-top">
                        <img src={artisan} className="indexIcon"/>
                            <p className="uk-margin-remove-top uk-text-bold">Artisans</p>
                    </div>

                  </div>

                  <div className="col-sm-3">
                 
                  <div class="iconContainer uk-margin-top">
                        <img src={food} className="indexIcon"/>
                            <p className="uk-margin-remove-top uk-text-bold">Food  & Catering</p>
                    </div>    
                  </div>
                  </div>
             </div>


















          


                            {/*Second row */}
                            <div class="uk-flex uk-flex-center uk-margin-medium-top">

                   


                  




                    </div>

            </div>
        </div>
        </div>
    )
}

export default Second_Pane
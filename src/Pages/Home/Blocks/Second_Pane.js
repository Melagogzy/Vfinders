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
        <div className="uk-container uk-margin-large-top">
            <div><h1 className="uk-text-center uk-text-bold">Browse skill by category</h1></div>
            <div className="uk-margin-medium-top" >
            <div class="uk-flex uk-flex-center">

                <div class="iconContainer ">
                    <img src={code} className="indexIcon"/>
                        <p className="uk-margin-remove-top uk-text-bold">Programming & Tech</p>
                 </div>


                 <div class="iconContainer uk-margin-left ">
                    <img src={writing} className="indexIcon"/>
                        <p className="uk-margin-remove-top uk-text-bold">Writing & Translation</p>
                 </div>  

                 <div class="iconContainer uk-margin-left">
                    <img src={design} className="indexIcon"/>
                        <p className="uk-margin-remove-top uk-text-bold">Graphics & Design</p>
                 </div>

                 <div class="iconContainer uk-margin-left">
                    <img src={music} className="indexIcon"/>
                        <p className="uk-margin-remove-top uk-text-bold"> Music & Entertainment</p>
                 </div>   
                
        </div>


                            {/*Second row */}
                            <div class="uk-flex uk-flex-center uk-margin-medium-top">

                    <div class="iconContainer ">
                        <img src={transport} className="indexIcon"/>
                            <p className="uk-margin-remove-top uk-text-bold">Transport & Logistics</p>
                    </div>


                    <div class="iconContainer uk-margin-left ">
                        <img src={professional} className="indexIcon"/>
                            <p className="uk-margin-remove-top uk-text-bold">Professional Services</p>
                    </div>  

                    <div class="iconContainer uk-margin-left">
                        <img src={artisan} className="indexIcon"/>
                            <p className="uk-margin-remove-top uk-text-bold">Artisans</p>
                    </div>

                    <div class="iconContainer uk-margin-left">
                        <img src={food} className="indexIcon"/>
                            <p className="uk-margin-remove-top uk-text-bold">Food  & Catering</p>
                    </div>   



                    </div>

            </div>
        </div>
    )
}

export default Second_Pane
import React from "react";
import plumber from '../../../images/plumber.png'


function First_Pane(){
    return(
        <div className="">
             <div className="indexBg">
                 <div className="uk-container">          
                 <div className="uk-grid " data-uk-grid>
                     <div className="uk-width-2-5@s">
                         <div className="uk-margin-xlarge-top">
                       <img src= {plumber}  className="sliderImg"/>
                       </div>
                     </div>

                     <div className="uk-width-3-5@s">
                       <div className="uk-margin-xlarge-top indexTopPad">
                           <h1 className="uk-text-bold  uk-text-left light">Find the best <span className="italic">freelance </span>
                           services to meet your needs</h1>

                           <div className="">
                                 <form className=" uk-padding-small">
                                 <div class="wrap">
                                <div class="search">
                                    <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                                    <button type="submit" class="searchButton">
                                    <span uk-icon="icon: search"></span>
                                    </button>
                                </div>
                                </div>
                                 </form> 
                           </div>
                       </div>
                     </div>
                 </div>
                 </div>


             </div>
        </div>
    )
}


export default First_Pane
import React from "react";
import Layout from "../../Layout/Layout";
import FormFive from "./Blocks/FormFive";
import FormFour from "./Blocks/FormFour";
import FormOne from "./Blocks/FormOne";
import FormThree from "./Blocks/FormThree";
import FormTwo from "./Blocks/FormTwo";
import { useSelector } from "react-redux";




const Client_Job_Post =()=>{
     const stage = useSelector(state => state.wizard.value)
     


     console.log(stage)

    

    return(
         <Layout>


            <div className="uk-container uk-margin-xlarge-top">
                {
                    stage === "0" ?  <FormOne /> : null 
                }
                {
                    stage.stage === "1" ?  <FormTwo /> : null
                }
               {
                    stage.stage === "2" ?   <FormThree /> : null
               }

               {
                    stage.stage === "3" ?   <FormFour /> : null
               }

               {
                    stage.stage === "4" ?   <FormFive /> : null
               }
                 
                
            </div>



            
         </Layout>

    )

}




export default Client_Job_Post;
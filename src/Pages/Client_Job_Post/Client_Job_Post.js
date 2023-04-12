import React from "react";
import Layout from "../../Layout/Layout";
import FormFive from "./Blocks/FormFive";
import FormFour from "./Blocks/FormFour";
import FormOne from "./Blocks/FormOne";
import FormThree from "./Blocks/FormThree";
import FormTwo from "./Blocks/FormTwo";




const Client_Job_Post =()=>{

    return(
         <Layout>


            <div className="uk-container uk-margin-xlarge-top">
                 <FormOne />
                 <FormTwo />
                 <FormThree />
                 <FormFour />
                 <FormFive />
            </div>



            
         </Layout>

    )

}




export default Client_Job_Post;
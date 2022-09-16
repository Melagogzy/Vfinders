import React from "react";
import Layout from "../../Layout/Layout";
import Fifth_Pane from "./Blocks/Fifth_pane";
import First_Pane from "./Blocks/First_Pane";
import Fourth_Pane from "./Blocks/Fourth_Pane";
import Second_Pane from "./Blocks/Second_Pane";
import Third_Pane from "./Blocks/Third_pane";

function Home(){
    return(
        <Layout >
         <First_Pane />
            <Second_Pane />
            <Third_Pane />
            <Fourth_Pane />
            <Fifth_Pane />
        </Layout>

    )
}



export default Home
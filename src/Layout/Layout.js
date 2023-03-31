import React from "react";
import HeaderBar from "./Blocks/HeaderBar";
import FooterBlock from "./Blocks/Footerblock";
import { useSelector } from "react-redux";

function Layout(props){

    
    return(
        <div maxWidth={false} disableGutters {...props}>
        <HeaderBar fillHeader={props.fillHeader}/>
        <div>
            {props.children}
        </div>
        <FooterBlock />
    </div >
    )
}

export default Layout


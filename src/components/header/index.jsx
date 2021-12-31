import React from "react";
import Navbar from "../navbar";
const Header =(props)=>{
    return(
        <div>
            {props.children}
        </div>
    );
}
export default Header;
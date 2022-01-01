import React, { useState } from "react";
import Area from "../src/components/area";
import Footer from "../src/components/footer";
import Header from "../src/components/header"
import Home from "../src/components/home";
import Navbar from "../src/components/navbar";




export default function Index(props) {
  const[nav,setNav]=useState("Home");
  const handleNav=(navItem)=>{
    setNav(navItem);
  }
 
  const openNavComponent=()=>{
    if(nav=="Home")return <Home/>
    else if(nav=="area")return <Area/>
  }
  return (
    
    <div>
      <Header><Navbar/></Header> 
      {openNavComponent()}
      <Footer navProp={handleNav}/>
    </div>
  )
}

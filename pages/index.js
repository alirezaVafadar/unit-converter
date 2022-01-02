import React, { useState } from "react";
import Area from "../src/components/area";
import Footer from "../src/components/footer";
import Header from "../src/components/header"
import Home from "../src/components/home";
import Length from "../src/components/length";
import Mass from "../src/components/mass";
import Navbar from "../src/components/navbar";
import Temperature from "../src/components/temperature";




export default function Index(props) {
  const[nav,setNav]=useState("Home");
  const handleNav=(navItem)=>{
    setNav(navItem);
  }
 
  const openNavComponent=()=>{
    if(nav=="temperature")return <Temperature/>
    else if(nav=="area")return <Area/>
    else if(nav=="length")return<Length/>
    else if(nav=="mass")return <Mass/>
    else return <Home/>
  }
  return (
    
    <div>
      <Header><Navbar/></Header> 
      {openNavComponent()}
      <Footer navProp={handleNav}/>
    </div>
  )
}

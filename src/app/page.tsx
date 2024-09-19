import Image from "next/image";
import { MdOutlinePostAdd } from "react-icons/md";
import Schedulelist from "./components/schedulelist"
import Search from "./components/search"
import Addbh from "./components/addbh"
import Header from "./components/header"
import { useState } from "react";
export default function Home() {
  

  return (
  
    
    <div className="container  mx-auto ">
      <Header/>
      <div className="flex justify-between m-2">
        <Addbh/> 
        <Search/>
      </div>
      <Schedulelist/> 
      
    </div>
    
  );
}

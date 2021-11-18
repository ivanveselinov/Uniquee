import React from "react";
import Basket from "./Basket";
import Search from "./Search";

function SidebarRight() {
  return<div className=" lg:w-1/4 bg-white overflow-hidden">
<Search />  
<Basket />
 </div>

}

export default SidebarRight;

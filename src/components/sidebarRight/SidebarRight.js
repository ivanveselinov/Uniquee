import React from "react";
import Basket from "./Basket";
import Search from "./Search";

function SidebarRight() {
  return<div className=" w-1/4 placeholder-gray-400 bg-gray-100  overflow-hidden border-1">
<Search />  
<Basket />
 </div>

}

export default SidebarRight;

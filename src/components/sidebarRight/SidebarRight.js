import React from "react";
import Basket from "./Basket";
import Search from "./Search";

function SidebarRight() {
  return<div className="hidden w-1/4 placeholder-gray-400 bg-gray-100  overflow-hidden ">
<Search />  
<Basket />
 </div>

}

export default SidebarRight;

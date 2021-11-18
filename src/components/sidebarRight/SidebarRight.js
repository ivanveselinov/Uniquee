import React from "react";
import Basket from "./Basket";
import Search from "./Search";

function SidebarRight() {
  return<div className="hidden pt-20 lg:w-1/4 bg-white overflow-hidden sm:block ">
<Search />  
<Basket />
 </div>

}

export default SidebarRight;

import React from "react";

function SidebarRight() {
  return<div className="w-1/4 border-4 bg-gray-400 overflow-hidden">
    <div className="text-2xl text-center mt-20">Search</div>
    <div className="space-x-3 space mt-20 flex justify-center">
    <input type="search" className=" text-gray-700 text-l font-bold mb-0 justify-center "/> 
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Search
    </button>
    </div>
 </div>

}

export default SidebarRight;

import React from "react";

function SidebarRight() {
  return<div className="w-1/4 border-4 placeholder-gray-400 bg-gray-100  overflow-hidden ">
    <div className="text-2xl text-center mt-20">Search</div>
    <div className="space-x-3 space mt-20 flex justify-center ">
    <input type="search" className=" text-gray-700 placeholder-gray-400 bg-gray-100text-l font-bold mb-0 justify-center rounded-b-3xl rounded-r-3xl rounded-l-3xl" placeholder="Search a product"/> 
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-b-3xl rounded-r-3xl rounded-l-3xl">
      Search
    </button>
    </div>
 </div>

}

export default SidebarRight;

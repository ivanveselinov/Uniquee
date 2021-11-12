import React from 'react'

function FeedInput() {
  return (
  <div className="mx-auto w-3/4 h-1/4 border-2 mt-10 " >
   
    <div className="mb-3 pt-0 flex justify-center border-2 w-3/4 mx-auto mt-10 ">
      <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white mt-1 mr-5 " src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>

      <input type="text" placeholder="Post a product" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4"/>
    </div>
 </div>
  )
}

export default FeedInput


// <div className="mx-auto w-3/4 h-1/4 border-2 mt-10 " >
//     <div className="flex w-14 overflow-hidden border-2 mt-5 ml-5 mx-auto">
//       <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white mt-5 ml-2" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
//     </div>
//     <div className="mb-3 pt-0 flex justify-center border-2 w-3/4 mx-auto ">
//       <input type="text" placeholder="Post a product" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4"/>
//     </div>
//  </div>
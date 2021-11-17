import React from 'react'

function Search() {
    return (
        <div>
            <div className="text-2xl text-center mt-10 ">Search</div>
            <div className="space-x-3 space mt-12 flex-col justify-center ">
            <input type="text" 
            className=" text-gray-700 placeholder-gray-400 font-bold justify-center rounded-full " 
            placeholder="Search a product"/> 
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Search
            </button>
    </div>
        </div>
    )
}

export default Search

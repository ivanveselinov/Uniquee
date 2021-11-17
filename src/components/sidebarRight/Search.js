import React from 'react'
import SearchIcon from '@mui/icons-material/Search';


function Search() {
    return (
        <div className="mb-5">
            <div className="text-2xl text-center border-b-2 pt-4 mt-2 "><SearchIcon/>Search</div>
            <div className="space-x-3 space mt-12 flex-col justify-center ">
            <input type="text" 
            className=" text-gray-700 placeholder-gray-400 font-bold justify-center rounded-full p-2 border-b-2" 
            placeholder="Search a product"/> 
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full p2">
                Search
            </button>
    </div>
        </div>
    )
}

export default Search
{/* <div className="hidden lg:inline-flex w-1/4 text-left bg-white flex-col px-4">
<div className="flex justify-between items-center border-b-2 h-24"> */}
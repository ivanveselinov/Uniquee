import React from "react";
import Feed from "./Feed";
import Avatar from '@mui/material/Avatar';

function Feeds() {
  return (
    <div className="border-2 w-3/4  m-auto rounded-xl ">
      
      
    <div className="border w-3/4 m-auto">
      
    <div className="border-2 mt-3 flex"><Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg " />
    <div className="w-1/2 border text-left m-auto ml-2">Ivan Veselinov</div>
    </div>
  </div>
      
  <div className="border w-3/4 m-auto mt-5">
  <Feed />
  <Feed />
  <Feed />
  <Feed />
  <Feed />
  <Feed />
  <Feed />
  </div>

      <div className="flex justify-between w-full pt-3 border-t-2 mt-4 border-b1">
        <div className="inputBtn">
          <p>Product name</p>
        </div>
        <div className="inputBtn">
          <p>Price</p>
        </div>
        <div className="inputBtn">
          <p>Add to basket</p>
        </div>
      
      </div>
     <div className="border flex justify-between w-full">
     <div className="inputBtn">
          <p>Like</p>
        </div>
        <div className="inputBtn">
          <p>Comment</p>
        </div>
    </div>
  </div>
    
  );
}

export default Feeds;

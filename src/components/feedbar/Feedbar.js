import React from "react";
import FeedInput from "./FeedInput";
import Feeds from "./Feeds";

function Feedbar() {
  return (
    <div className="flex-grow max-h-screen pb-44   overflow-y-auto scrollbar-hide pt-20 ">
      <div className=" mx-auto max-w-md md:max-w-lg lg:max-w-xl 2xl:max-w-2xl pt-5">
        <FeedInput />
        <Feeds />
      </div>
    </div>
  );
}

export default Feedbar;

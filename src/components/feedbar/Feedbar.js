import React from "react";
import FeedInput from "./FeedInput";
import Feeds from "./Feeds";

function Feedbar() {
  return (
    <div className="flex-grow h-screen item-center flex flex-col">
      <FeedInput />
      <div className="mt-10">
        <Feeds />
      </div>
    </div>
  );
}

export default Feedbar;

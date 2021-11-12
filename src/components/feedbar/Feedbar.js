import React from "react";
import FeedInput from "./FeedInput";
import Feeds from "./Feeds";

function Feedbar() {
  return (
    <div className="flex-grow h-screen">
      <FeedInput />
      <Feeds />
    </div>
  );
}

export default Feedbar;

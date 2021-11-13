import React from "react";

function FeedInput() {
  return (
    <div className="mx-auto w-3/4 h-1/4 border-2 mt-10 p-3 rounded-lg">
      <form action="" className="w-full ">
        <div className="flex space-x-2">
          <img
            className="w-8 h-8 rounded-full ring-1"
            src="https://thethirdwave.co/app/themes/ttw/assets/img/third-wave-logo-color.svg"
            alt=""
          />
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Tell us about your product"
              className="rounded-full h-10 placeholder-gray-400 bg-gray-100 flex-grow w-full"
            />
            <button className="hidden">Submit</button>
          </div>
        </div>
      </form>
      <div className="flex justify-between w-full pt-3 border-t-2 mt-4">
        <div className="inputBtn">
          <p>Photo/Video</p>
        </div>
        <div className="inputBtn">
          <p>Price</p>
        </div>
        <div className="inputBtn">
          <p>Category</p>
        </div>
        <div className="inputBtn">
          <p>Send</p>
        </div>
      </div>
    </div>
  );
}

export default FeedInput;

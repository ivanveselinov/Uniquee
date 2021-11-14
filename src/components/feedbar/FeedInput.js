import React, { useRef } from "react";
import { useContextProvider } from "../../context/StateProvider";
function FeedInput() {
  const [{ user }, dispatch] = useContextProvider();
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(descriptionRef.current.value);
    console.log(priceRef.current.value);
  };
  return (
    <div className="mx-auto w-3/4 h-1/4 border-2 mt-10 p-3 rounded-lg">
      <form className="w-full " onSubmit={submitHandler}>
        <div className="flex space-x-2">
          <img
            className="w-8 h-8 rounded-full ring-1"
            src={user?.photoURL}
            alt=""
          />
          <div className="flex-grow">
            <input
              ref={descriptionRef}
              type="text"
              placeholder="Tell us about your product"
              className="rounded-full h-10 placeholder-gray-400 bg-gray-100 flex-grow w-full"
            />
            <button className="hidden" onClick={submitHandler}>
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-between w-full pt-3 border-t-2 mt-4">
        <div className="inputBtn">
          <p>Photo/Video</p>
        </div>
        <div className="inputBtn">
          <input type="number" name="price" ref={priceRef} />
        </div>
        <div className="inputBtn">
          <p>Category</p>
        </div>
        <div className="inputBtn" onClick={submitHandler}>
          <p>Send</p>
        </div>
      </div>
    </div>
  );
}

export default FeedInput;

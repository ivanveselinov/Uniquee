import React from "react";
import { useContextProvider } from "../../context/StateProvider";

const Category = ({ name, Icon }) => {
  const [{ selectedCategory }, dispatch] = useContextProvider();
  const clickHandler = () => {
    dispatch({
      type: "SELECT_CATEGORY",
      payload: selectedCategory === name ? "" : name,
    });
  };

  return (
    <div
      className={`flex justify-between items-center hover:bg-gray-200 cursor-pointer ${
        selectedCategory === name && "bg-gray-200"
      }`}
      onClick={clickHandler}
    >
      <div className="border rounded-full">
        <Icon />
      </div>
      <div>{name}</div>
    </div>
  );
};

export default Category;

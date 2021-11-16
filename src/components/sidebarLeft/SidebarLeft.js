import { Avatar } from "@material-ui/core";
import React from "react";
import { useContextProvider } from "../../context/StateProvider";
import Category from "./Category";
import CheckboxList from "./CheckBoxList";

function SidebarLeft() {
  const [{user}, dispatch] = useContextProvider();
  return (
    
    <div className=" lg:inline-flex w-1/4 text-left bg-indigo-100 flex">
     
      <div className="flex justify-between items-center">
        <Avatar src={user.photoURL} />
        <div>{user.displayName}</div>
        </div>
      <Category />
      <CheckboxList />
    </div>
  );
}

export default SidebarLeft;

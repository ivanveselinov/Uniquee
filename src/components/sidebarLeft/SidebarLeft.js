import React from "react";
import CheckboxList from "./CheckBoxList";

function SidebarLeft() {
  return (
    <div className="hidden lg:inline-flex w-1/4 text-left bg-indigo-100 ">
      <CheckboxList />
    </div>
  );
}

export default SidebarLeft;

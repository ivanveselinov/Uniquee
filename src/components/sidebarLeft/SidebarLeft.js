import { Avatar } from "@mui/material";
import React from "react";
import { useContextProvider } from "../../context/StateProvider";
import Category from "./Category";
import CheckboxList from "./CheckBoxList";
import BrushIcon from "@mui/icons-material/Brush";
function SidebarLeft() {
  const [{ user }, dispatch] = useContextProvider();
  return (
    <div className="hidden lg:inline-flex w-1/4 text-left bg-white flex-col">
      <div className="flex justify-between items-center">
        <Avatar src={user.photoURL} />
        <div>{user.displayName}</div>
      </div>
      <Category name="Painting" Icon={BrushIcon} />
      <Category name="Accessories" Icon={BrushIcon} />
      <Category name="Handmade" Icon={BrushIcon} />
      <Category name="Textural" Icon={BrushIcon} />
      <Category name="Clothes" Icon={BrushIcon} />
      <Category name="NFTs" Icon={BrushIcon} />
      <Category name="Jewerly" Icon={BrushIcon} />
      <Category name="Cookies" Icon={BrushIcon} />
      <Category name="Plants" Icon={BrushIcon} />
      <Category name="Other" Icon={BrushIcon} />
      {/* <CheckboxList /> */}
    </div>
  );
}

export default SidebarLeft;

import firebase from "firebase";
import Feedbar from "./components/feedbar/Feedbar";
import Header from "./components/Header";
import SidebarLeft from "./components/sidebarLeft/SidebarLeft";
import SidebarRight from "./components/sidebarRight/SidebarRight";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/loginPage/Login";
import React, { useEffect, useState } from "react";
import { db} from "./firebase/firebase.js";
import { shadows } from "@mui/system";
import { useContextProvider } from "./context/StateProvider";

function App() {
  const [user, loading, error] = useAuthState(firebase.auth());  // Check for any users inside db
  const [{ color }, dispatch] = useContextProvider();
  useEffect(()=>{if (user) {  
    dispatch(
      {
        type: "user",
        payload: user,
      }
    );
  }},[user])// if user exist dispatch information
  

  // const user = 'ivan'
  // useEffect(()=>{
  //   db.collection("posts")
  //     .add({
        
  //       name: "ivan",
  //       image: "image",
  //     })
  // },[])
  return (
    <div className="w-screen h-screen flex flex-col">
      { user? ( <div> <Header />
      <div className="flex border-4 w-screen h-full">
        <SidebarLeft />
        <Feedbar />
        <SidebarRight />
      </div></div> ) : ( <Login /> ) }
      
    </div>
  );
}

export default App;
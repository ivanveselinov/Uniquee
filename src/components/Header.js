import React from "react";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
  const [user, loading, error] = useAuthState(firebase.auth()); 
  return (
    <div className="w-screen h-20 flex justify-between bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <div className="flex">
        <h2 className="m-5 text-3xl">Uniquee</h2>
      </div>
      <div className="flex overflow-hidden" onClick={() => firebase.auth().signOut()}>
        <a href="#" className="flex items-center">
          Logout
        </a>
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white m-4"
          src={ user.photoURL }
          // src="https://thethirdwave.co/app/themes/ttw/assets/img/third-wave-logo-color.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;

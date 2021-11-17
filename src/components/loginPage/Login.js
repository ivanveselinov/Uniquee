import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import Header from "../Header";

// Config FirebaseUI
const uiConfig = {
  //---- Providers
  signInOptions: [
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  ],
  signInFlow: "popup",
};

function Login() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <p className="">
          This web application is aiming to encourage all individuals to be more
          creative and share their own products here with other users.{" "}
        </p>
      </div>
      <div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>
  );
}

export default Login;

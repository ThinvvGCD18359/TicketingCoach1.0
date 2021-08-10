import 'firebase/auth';
import React from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import "../../node_modules/firebaseui/dist/firebaseui.css";
import { auth, firebase } from "../firebase/index";


    const uiConfig = {
        signInFlow: 'popup',
        signinSuccessUrl: '/home',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        ],
        tosUrl: '<your-tos-url>',
        privacyPolicyUrl: function() {
        window.location.assign('<your-privacy-policy-url>');
    },
}
  
function Login(){
    return (
        <div>
      <h1>Welcome to Ticketing Coach 1.0</h1>
      <h3>Please Login</h3>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
    )
}

export default Login
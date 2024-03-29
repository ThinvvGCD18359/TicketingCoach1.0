import { Container } from '@material-ui/core';
import 'firebase/auth';
import React from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Banner from '../../../../components/Banner';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import { auth, firebase } from "../../../../firebase/index";


    const uiConfig = {
        signInFlow: 'popup',
        signinSuccessUrl: '/',
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
            <Container maxWidth="lg">
            <Header />
            <Banner/>
            <h3>Please Login</h3>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            </Container>
            <Footer/>
        </div>
    )
}

export default Login
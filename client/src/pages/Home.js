import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import {Link} from 'react-router-dom';


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

function signOut() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut().then(() => {
            console.log("User successfully logged out");
            window.location="/login";
        }).catch(error => console.log('Something went wrong! ', error))
    } else {
      alert('user already logged out.');
      return true;      
    }
}

function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver();
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>Ticketing Coach 1.0</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div style={{width: "100%"}}>
      <div>
        <h1>Ticketing Coach 1.0</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! </p>
        <button className="button">
            <Link to="/profile">Profile</Link>
        </button>
        <button onClick={signOut} className="button">Change Account</button>
      </div>

      <div className="card">
      <img src="1.jpg" alt="pic" style={{width:"100%"}}/>
      <h1>Dn-Sg</h1>
      <p className="price">$19.99</p>
      <p>Some text...</p>
      <p><button>
        <Link to="/views">View</Link>
      </button></p>
    </div>

    <div className="card">
      <img src="1.jpg" alt="pic" style={{width:"100%"}}/>
      <h1>Dn-Sg</h1>
      <p className="price">$19.99</p>
      <p>Some text...</p>
      <p><button>
        <Link to="/views">View</Link>
      </button></p>
    </div>

    <div className="card">
      <img src="1.jpg" alt="pic" style={{width:"100%"}}/>
      <h1>Dn-Sg</h1>
      <p className="price">$19.99</p>
      <p>Some text...</p>
      <p><button>
        <Link to="/views">View</Link>
      </button></p>
    </div>
    </div>
  );
}

export default Home;
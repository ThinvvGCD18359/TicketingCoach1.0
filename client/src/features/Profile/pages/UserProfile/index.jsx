import React from 'react';
import firebase from 'firebase';


function UserProfile() {
    const user = firebase.auth().currentUser;
    const email = user.email;
    const name = user.displayName;
    const photoURL = user.photoURL;
    const phoneNumber = user.phoneNumber;

    if(user) {

    if(!name) {
      return (
        <p>Hello {phoneNumber}</p>
      )
    } else {
      return(
        <div>
            <p>Hello {name}! </p>
            <p>Email: {email}! </p>
            <p>PhotoURl: {photoURL}! </p>            
        </div>
      )
    }
  } else {
      alert('Please login');
      return true; 
    }
}
 
 
  


export default UserProfile;
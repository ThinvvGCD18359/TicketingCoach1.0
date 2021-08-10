import React from 'react';
import firebase from 'firebase';




function Profile() {
    if (firebase.auth().currentUser) {
        return(
            <div>
                <p>Hello {firebase.auth().currentUser.displayName}! </p>
                <p>Email {firebase.auth().currentUser.email}! </p>
                <p>Photo {firebase.auth().currentUser.photoURL}! </p>
                
            </div>
        )
    } else {
      alert('Please login');
      return true;      
    }
}

export default Profile
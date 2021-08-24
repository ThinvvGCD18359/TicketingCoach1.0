import React from 'react';
import Header from '../../../../components/Header';
import { Container, Typography } from '@material-ui/core';
import Banner from '../../../../components/Banner';
import Footer from '../../../../components/Footer';


function UserProfile() {
    const currentUser = JSON.parse(localStorage.getItem('user'));

    if(localStorage.getItem('user')) {
      const email = currentUser.email;
      const name = currentUser.name;
      const photoURL = currentUser.photoUrl;
      const phoneNumber = currentUser.phoneNumber;
      
      if(!name) {
        return (
          <div>
          <Container maxWidth="lg">
          <Header/>
          <Banner/>
          <Typography>
            User Profile:
          </Typography>
            <h3>Hello: {phoneNumber}</h3>
          </Container>
          <Footer/>
          </div>
        )
      } else {
        return(
          <div>
            <Container maxWidth="lg">
            <Header/>
            <Banner/>
              <h3>Hello {name}! </h3>
              <h3>Email: {email}! </h3>
              <h3>PhotoURl: {photoURL}! </h3>    
            </Container> 
            <Footer/>       
          </div>
        )
      }
    } else {
      alert('Please login');
      return true; 
    }
}
  


export default UserProfile;
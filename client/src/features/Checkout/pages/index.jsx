import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../../../components/Header';
import Banner from '../../../components/Banner';
import Footer from '../../../components/Footer';
import { Typography } from '@material-ui/core';



export default function CheckOut() {
  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header/>
          <Banner/>
          <Typography>
            Check Out
          </Typography> 
      </Container>
      <Footer/>
    </React.Fragment>
  );
}
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import HomePage from '../features/Home/pages';



export default function MainPage() {
  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header/>
          <Banner/>
          <HomePage/>
      </Container>
      <Footer/>
    </React.Fragment>
  );
}
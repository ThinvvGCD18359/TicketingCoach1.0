import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Coach from '../features/Coach/index'


export default function MainPage(props) {
  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header/>
          <Banner/>
          <Coach/>
      </Container>
      <Footer/>
    </React.Fragment>
  );
}
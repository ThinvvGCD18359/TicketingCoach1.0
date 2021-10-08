import CoachCard from '../../components/CoachCard';
import React, { useEffect, useState } from 'react';
import coachApi from '../../../../api/coachApi';
import { Container } from '@material-ui/core';
import Header from '../../../../components/Header';
import Banner from '../../../../components/Banner';
import Footer from '../../../../components/Footer';


function CoachMain(props) {
  const [coach, setCoach] = useState([]);

  useEffect(() => {
    async function getCoach() {
      const response = await coachApi.getAllCoaches();
      console.log(response);
      setCoach(response);
    }
    getCoach();
  }, []);

  return (
    <Container>
      <Header />
      <Banner />
        <CoachCard coaches={coach}/>
      <Footer />
    </Container>
  );
}

export default CoachMain;
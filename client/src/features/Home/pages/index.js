import React, { useEffect, useState } from 'react';
import coachApi from '../../../api/coachApi';
import CoachCard from '../../Coach/components/CoachCard';


function HomePage(props) {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    async function getPopular() {
      const response = await coachApi.getPopular();
      console.log(response);
      setPopular(response);
    }
    getPopular();
  }, []);

  return (
    <div> 
        <CoachCard coaches={popular}/>
    </div>
  );
}

export default HomePage;
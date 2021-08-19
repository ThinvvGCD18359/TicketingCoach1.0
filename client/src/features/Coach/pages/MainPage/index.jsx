import CoachList from '../../components/CoachList';
import React from 'react';
import {  useSelector } from 'react-redux';


MainPage.propTypes = {};

function MainPage(props) {
  const coaches = useSelector(state => state.coaches);

  return (
    <div>
      
        <CoachList
          coachList={coaches}
        />
      
    </div>
  );
}

export default MainPage;
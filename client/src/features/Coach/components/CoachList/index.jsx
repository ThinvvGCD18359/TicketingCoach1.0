import React, { useState } from 'react';
import CoachCard  from '../CoachCard';


function CoachList(props) {
    const [coach] = useState([]);


  return (
    <div>
          <CoachCard
            coaches={coach}
          />
    </div>
  );
}

export default CoachList;
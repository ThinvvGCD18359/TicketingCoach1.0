import React, {  useState } from 'react';
import coachApi from '../../../../api/coachApi';
import PropTypes from "prop-types";


CreateCoach.propTypes = {
  coaches: PropTypes.array,
};

function CreateCoach(props) {

  const [coach, setCoach] = useState({});

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCoach({ ...coach, [name]: value });
  };

  const addCoach = async (e) => {
    e.preventDefault();
    try {
      const response = await coachApi.createCoach(coach);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    window.alert('Completed creating')
    window.location.href = "/coach/createroute"
  }
  
  return (
    <div> 
        <form>
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={coach.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="plates">Plates</label>
            <input
              type="text"
              className="form-control"
              id="plates"
              required
              value={coach.plates}
              onChange={handleInputChange}
              name="plates"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="phonenumber"
              required
              value={coach.phonenumber}
              onChange={handleInputChange}
              name="phonenumber"
            />
          </div>

          <button onClick={addCoach} className="btn btn-success">
            Submit
          </button>
        </div>
        </form>
    </div>
  );
}

export default CreateCoach;
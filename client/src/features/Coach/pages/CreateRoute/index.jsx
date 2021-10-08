import React, {  useState } from 'react';
import coachApi from '../../../../api/coachApi';
import PropTypes from "prop-types";


CreateRoute.propTypes = {
  routes: PropTypes.array,
};

function CreateRoute(props) {

  const [route, setRoute] = useState({});

  const handleInputChange = event => {
    const { name, value } = event.target;
    setRoute({ ...route, [name]: value });
  };

  const addRoute = async (e) => {
    e.preventDefault();
    try {
      const response = await coachApi.createRoute(route);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    window.alert('Completed creating')
    window.location.href = "/coach"
  }
  
  return (
    <div> 
        <form>
        <div>
          <div className="form-group">
            <label htmlFor="starting">Starting</label>
            <input
              type="text"
              className="form-control"
              id="starting"
              required
              value={route.starting}
              onChange={handleInputChange}
              name="starting"
            />
          </div>

          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              className="form-control"
              id="destination"
              required
              value={route.destination}
              onChange={handleInputChange}
              name="destination"
            />
          </div>

          <div className="form-group">
            <label htmlFor="departure">Departure</label>
            <input
              type="date"
              className="form-control"
              id="departure"
              required
              value={route.departure}
              onChange={handleInputChange}
              name="departure"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              required
              value={route.price}
              onChange={handleInputChange}
              name="price"
            />
          </div>

          <button onClick={addRoute} className="btn btn-success">
            Submit
          </button>
        </div>
        </form>
    </div>
  );
}

export default CreateRoute;
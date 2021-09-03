import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Image } from 'react-bootstrap';
import { addReservationRocket, removeReservationRocket } from '../redux/api/api';
import './style/Rockets.css';

function Rockets() {
  const { rocketsReducer } = useSelector((state) => state);
  const { rockets } = rocketsReducer;
  const [rocketsDisplay, setRocketsDisplay] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets !== rocketsDisplay) {
      setRocketsDisplay(rockets);
    }
  });

  function checkButton(status) {
    if (status.reserved === false) {
      return (
        <Button variant="primary" onClick={() => dispatch(addReservationRocket(status))}>Reserve Rocket</Button>
      );
    }
    if (status.reserved === true) {
      return (
        <Button variant="outline-secondary" onClick={() => dispatch(removeReservationRocket(status))}>Cancel Reservation</Button>
      );
    }
    return (
      <h3>Member?</h3>
    );
  }

  function checkStatus(status) {
    if (status.reserved === true) {
      return (
        <p className="specialFloat">Reserved</p>
      );
    }
    if (status.reserved === false) {
      return (
        <p className="special" />
      );
    }
    return (
      <h3>Member?</h3>
    );
  }

  function checkStatus(status) {
    if (status.reserved === true) {
      return (
        <p>Reserved</p>
      );
    }
    if (status.reserved === false) {
      return (
        <p className="special" />
      );
    }
    return (
      <h3>Member?</h3>
    );
  }

  if (rocketsDisplay) {
    return (
      <div className="border-top border-2">
        {rocketsDisplay.map((element) => (
          <div key={element.id} className="rocketContainer">
            <Image src={element.flickr_images[0]} alt="rocket" className="w-25 ms-2 me-3 imageRocket" />
            <div className="textRocket">
              <h1>{element.name}</h1>
              <div className="specialRocket">
                {checkStatus(element)}
                <p className="desc">{element.description}</p>
              </div>
              {checkButton(element)}
            </div>
          </div>
        ))}
      </div>
    );
  }
  return <h3>empty</h3>;
}

export default Rockets;

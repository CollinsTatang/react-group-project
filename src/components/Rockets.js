import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Rockets() {
  const { rocketsReducer } = useSelector((state) => state);
  const { rockets } = rocketsReducer;
  const [rocketsDisplay, setRocketsDisplay] = useState(null);

  useEffect(() => {
    if (rockets !== rocketsDisplay) {
      setRocketsDisplay(rockets);
    }
  });

  function checkButton(status) {
    if (status === false) {
      return (
        <button type="button">Reserve Rocket</button>
      );
    }
    if (status === true) {
      return (
        <button type="button">Cancel Reservation</button>
      );
    }
    return (
      <h3>Member?</h3>
    );
  }

  if (rocketsDisplay) {
    return (
      <div className="rocketsContainer">
        {rocketsDisplay.map((element) => (
          <div key={element.id}>
            <img src={element.flickr_images[0]} alt="rocket" />
            <div>
              <h1>{element.rocket_name}</h1>
              <p>{element.description}</p>
              {checkButton(element.reserved)}
            </div>
          </div>
        ))}
      </div>
    );
  }
  return <h3>empty</h3>;
}

export default Rockets;

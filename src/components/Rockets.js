import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Rockets() {
  const { reservationReducer } = useSelector((state) => state);
  const { reservations } = reservationReducer;
  const { rockets } = reservations;
  const [rocketsDisplay, setRocketsDisplay] = useState(null);

  useEffect(() => {
    if (rockets !== rocketsDisplay) {
      setRocketsDisplay(rockets);
    }
  });

  if (rocketsDisplay) {
    return (
      <div className="rocketsContainer">
        {rocketsDisplay.map((element) => (
          <div key={element.id}>
            <img src={element.flickr_images[0]} alt="rocket" />
            <div>
              <h1>{element.rocket_name}</h1>
              <p>{element.description}</p>
              <button type="button">Reserve</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return <h3>empty</h3>;
}

export default Rockets;

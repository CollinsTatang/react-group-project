import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Rockets() {
  const { reservationReducer } = useSelector((state) => state);
  const { reservations } = reservationReducer;
  const { rockets } = reservations;
  const [rocketsDisplay, setRocketsDisplay] = useState(null);
  console.log(rockets);
  useEffect(() => {
    if (rockets !== rocketsDisplay) {
      setRocketsDisplay(rockets);
    }
  });

  if (rocketsDisplay) {
    return (
      <div className="rocketsContainer">
        <p>hello</p>
      </div>
    );
  }
  return <h3>empty</h3>;
}

export default Rockets;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addReservationRocket, removeReservationRocket } from '../redux/api/api';

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
        <button type="button" onClick={() => dispatch(addReservationRocket(status))}>Reserve Rocket</button>
      );
    }
    if (status.reserved === true) {
      return (
        <button type="button" onClick={() => dispatch(removeReservationRocket(status))}>Cancel Reservation</button>
      );
    }
    return (
      <h3>Member?</h3>
    );
  }
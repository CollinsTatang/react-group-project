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

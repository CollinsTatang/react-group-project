import React from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/reservations/reservations';

function Missions() {
  const dispatch = useDispatch();
  const submit = () => {
    const hello = 'hello';
    dispatch(addReservation(hello));
  };

  return (
    <section>
      <p>missions page is here!</p>
      <button type="button" onClick={submit}>add reservation</button>
    </section>
  );
}

export default Missions;

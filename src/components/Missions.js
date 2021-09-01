import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Missions() {
  const { missionsReducer } = useSelector((state) => state);
  const { missions } = missionsReducer;
  const [missionsDisplay, setMissionsDisplay] = useState(null);

  useEffect(() => {
    if (missions !== missionsDisplay) {
      setMissionsDisplay(missions);
    }
  });

  function checkStatus(status) {
    if (status === false) {
      return (
        <h3>NOT A MEMBER</h3>
      );
    }
    if (status === true) {
      return (
        <h3>Active Member</h3>
      );
    }
    return (
      <h3>Member?</h3>
    );
  }

  function checkButton(status) {
    if (status === false) {
      return (
        <button type="button">Join Mission</button>
      );
    }
    if (status === true) {
      return (
        <button type="button">Leave Mission</button>
      );
    }
    return (
      <h3>Member?</h3>
    );
  }
  if (missionsDisplay) {
    return (
      <section>
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>status</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {missionsDisplay.map((element) => (
              <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.description}</td>
                <td>{checkStatus(element.reserved)}</td>
                <td>{checkButton(element.reserved)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
  return <h3>empty</h3>;
}

export default Missions;

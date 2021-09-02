import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Myprofile() {
  const { missionsReducer } = useSelector((state) => state);
  const { missions } = missionsReducer;
  const [missionsDisplay, setMissionsDisplay] = useState(null);
  const { rocketsReducer } = useSelector((state) => state);
  const { rockets } = rocketsReducer;
  const [rocketsDisplay, setRocketsDisplay] = useState(null);

  useEffect(() => {
    if (missions !== missionsDisplay) {
      setMissionsDisplay(missions);
    }
    if (rockets !== rocketsDisplay) {
      setRocketsDisplay(rockets);
    }
  });

  function checkMissionsRockets(element) {
    if (element.reserved === true) {
      return (
        <tr key={element.id}>
          <td>{element.name}</td>
        </tr>
      );
    }
    return (
      <tr className="special" key={element.id}>
        <td>&nbsp;</td>
      </tr>
    );
  }

  if (missionsDisplay || rocketsDisplay) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>My Missions</th>
            </tr>
          </thead>
          <tbody>
            {missionsDisplay.map((element) => (
              checkMissionsRockets(element)
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>My Rockets</th>
            </tr>
          </thead>
          <tbody>
            {rocketsDisplay.map((element) => (
              checkMissionsRockets(element)
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return <h3>empty</h3>;
}

export default Myprofile;

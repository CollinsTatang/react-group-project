import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table, Container, Badge, Button,
} from 'react-bootstrap';
import { addReservationMission, removeReservationMission } from '../redux/api/api';

function Missions() {
  const { missionsReducer } = useSelector((state) => state);
  const { missions } = missionsReducer;
  const [missionsDisplay, setMissionsDisplay] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions !== missionsDisplay) {
      setMissionsDisplay(missions);
    }
  });

  function checkStatus(status) {
    if (status === false) {
      return (
        <Badge className="bg-secondary">NOT A MEMBER</Badge>
      );
    }
    if (status === true) {
      return (
        <Badge className="bg-info">Active Member</Badge>
      );
    }
    return (
      <h3>Member?</h3>
    );
  }

  function checkButton(status) {
    if (status.reserved === false) {
      return (
        <Button variant="outline-danger" onClick={() => dispatch(addReservationMission(status))}>Join Mission</Button>
      );
    }
    if (status.reserved === true) {
      return (
        <Button variant="outline-secondary" onClick={() => dispatch(removeReservationMission(status))}>Leave Mission</Button>
      );
    }
    return (
      <h3>Member?</h3>
    );
  }
  if (missionsDisplay) {
    return (
      <Container fluid className="table-responsive-sm">
        <Table className="my-3 table-bordered table-striped">
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
                <td>{checkButton(element)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
  return <h3>empty</h3>;
}

export default Missions;

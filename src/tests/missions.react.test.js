import {
  reciveReservationMissions,
  reciveReservationRockets,
  addReservationMission,
  addReservationRocket,
  removeReservationMission,
  removeReservationRocket,
} from '../redux/api/api';

describe('Testing actions of adding data', () => {
  it('reciveReservationMissions working fine', () => {
    const payload = '38993';
    const expected = {
      type: 'RECIVE_RESERVATION_MISSION',
      payload,
    };
    expect(reciveReservationMissions(payload)).toEqual(expected);
  });

  it('reciveReservationrockets working fine', () => {
    const payload = '38993';
    const expected = {
      type: 'RECIVE_RESERVATION_ROCKET',
      payload,
    };
    expect(reciveReservationRockets(payload)).toEqual(expected);
  });
});

describe('Testing actions of getting data', () => {
  it('addReservationMission working fine', () => {
    const payload = '38993';
    const expected = {
      type: 'ADD_RESERVATION_MISSION',
      payload,
    };
    expect(addReservationMission(payload)).toEqual(expected);
  });

  it('addReservationRocket working fine', () => {
    const payload = '38993';
    const expected = {
      type: 'ADD_RESERVATION_ROCKET',
      payload,
    };
    expect(addReservationRocket(payload)).toEqual(expected);
  });
});

describe('Testing actions of getting data', () => {
  it('removeReservationMission working fine', () => {
    const payload = '38993';
    const expected = {
      type: 'REMOVE_RESERVATION_MISSION',
      payload,
    };
    expect(removeReservationMission(payload)).toEqual(expected);
  });

  it('removeReservationRocket working fine', () => {
    const payload = '38993';
    const expected = {
      type: 'REMOVE_RESERVATION_ROCKET',
      payload,
    };
    expect(removeReservationRocket(payload)).toEqual(expected);
  });
});

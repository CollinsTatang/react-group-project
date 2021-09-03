import api from '../../api/api';

const RECIVE_RESERVATION_ROCKET = 'RECIVE_RESERVATION_ROCKET';
const ADD_RESERVATION_ROCKET = 'ADD_RESERVATION_ROCKET';
const REMOVE_RESERVATION_ROCKET = 'REMOVE_RESERVATION_ROCKET';
const RECIVE_RESERVATION_MISSION = 'RECIVE_RESERVATION_MISSION';
const ADD_RESERVATION_MISSION = 'ADD_RESERVATION_MISSION';
const REMOVE_RESERVATION_MISSION = 'REMOVE_RESERVATION_MISSION';

export const reciveReservationRockets = (payload) => ({
  type: RECIVE_RESERVATION_ROCKET,
  payload,
});

export const reciveReservationMissions = (payload) => ({
  type: RECIVE_RESERVATION_MISSION,
  payload,
});

export const addReservationRocket = (payload) => ({
  type: ADD_RESERVATION_ROCKET,
  payload,
});

export const removeReservationRocket = (payload) => ({
  type: REMOVE_RESERVATION_ROCKET,
  payload,
});

export const addReservationMission = (payload) => ({
  type: ADD_RESERVATION_MISSION,
  payload,
});

export const removeReservationMission = (payload) => ({
  type: REMOVE_RESERVATION_MISSION,
  payload,
});

export const getRockets = () => (dispatch) => {
  api.getRockets().then((rockets) => {
    dispatch(reciveReservationRockets(rockets));
    return rockets;
  });
};

export const getMissions = () => (dispatch) => {
  api.getMissions().then((missions) => {
    dispatch(reciveReservationMissions(missions));
    return missions;
  });
};

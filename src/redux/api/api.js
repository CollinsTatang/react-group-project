import api from '../../api/api';

const RECIVE_RESERVATION_ROCKET = 'RECIVE_RESERVATION_ROCKET';
const RECIVE_RESERVATION_MISSION = 'RECIVE_RESERVATION_MISSION';

const reciveReservationRockets = (payload) => ({
  type: RECIVE_RESERVATION_ROCKET,
  payload,
});

const reciveReservationMissions = (payload) => ({
  type: RECIVE_RESERVATION_MISSION,
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

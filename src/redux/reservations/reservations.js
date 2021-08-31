import api from '../../api/api';

const ADD_RESERVATION = 'ADD_RESERVATION';
const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

const initialState = {
  reservations: {
    missions: api.getMissions(),
    rockets: api.getRockets(),
  },
};

export const addReservation = (payload) => ({
  type: ADD_RESERVATION,
  payload,
});

export const removeReservation = (payload) => ({
  type: REMOVE_RESERVATION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION: {
      console.log('working fine');
      console.log(action);
      return state;
    }
    case REMOVE_RESERVATION: {
      return 'working2';
    }
    default:
      return state;
  }
};

export default reducer;

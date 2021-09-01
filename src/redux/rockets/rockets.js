const ADD_RESERVATION_ROCKET = 'ADD_RESERVATION_ROCKET';
const REMOVE_RESERVATION_ROCKET = 'REMOVE_RESERVATION_ROCKET';
const RECIVE_RESERVATION_ROCKET = 'RECIVE_RESERVATION_ROCKET';

const initialState = { rockets: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION_ROCKET: {
      return state;
    }
    case REMOVE_RESERVATION_ROCKET: {
      return 'working2';
    }
    case RECIVE_RESERVATION_ROCKET: {
      const rockets = action.payload;
      return { rockets };
    }
    default:
      return state;
  }
};

export default reducer;

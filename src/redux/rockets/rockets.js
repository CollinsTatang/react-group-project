const ADD_RESERVATION_ROCKET = 'ADD_RESERVATION_ROCKET';
const REMOVE_RESERVATION_ROCKET = 'REMOVE_RESERVATION_ROCKET';
const RECIVE_RESERVATION_ROCKET = 'RECIVE_RESERVATION_ROCKET';

const initialState = { rockets: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION_ROCKET: {
      const { rockets } = state;
      let newState;
      if (rockets) {
        newState = rockets.map((i) => (i.id === action.payload.id ? { ...i, reserved: true } : i));
      }
      return {
        rockets: newState,
      };
    }
    case REMOVE_RESERVATION_ROCKET: {
      const { rockets } = state;
      let newState;
      if (rockets) {
        newState = rockets.map((i) => (i.id === action.payload.id ? { ...i, reserved: false } : i));
      }
      return {
        rockets: newState,
      };
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
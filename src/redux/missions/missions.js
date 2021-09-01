/* eslint-disable */
const ADD_RESERVATION_MISSION = 'ADD_RESERVATION_MISSION';
const REMOVE_RESERVATION_MISSION = 'REMOVE_RESERVATION_MISSION';
const RECIVE_RESERVATION_MISSION = 'RECIVE_RESERVATION_MISSION';

const initialState = { missions: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION_MISSION: {
      const { missions } = state;
      let newState;
      if (missions) {
        newState = missions.map((i) => (i.id === action.payload.id ? { ...i, reserved: true } : i));
      }
      return {
        missions: newState,
      };
    }
    case REMOVE_RESERVATION_MISSION: {
      const { missions } = state;
      let newState;
      if (missions) {
        newState = missions.map((i) => (i.id === action.payload.id ? { ...i, reserved: false } : i));
      }
      return {
        missions: newState,
      };
    }
    case RECIVE_RESERVATION_MISSION: {
      const missions = action.payload;
      return { missions };
    }
    default:
      return state;
  }
};

export default reducer;

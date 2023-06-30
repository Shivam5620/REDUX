import { ADDITION, SUBTRACTION } from './actionType';

const initialState = {
  result: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {
        result: state.result + action.payload,
      };
    case SUBTRACTION:
      return {
        result: state.result - action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

import {
  PEOPLE_ACTION,
} from '../actions/actionTypes';

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE_ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
};
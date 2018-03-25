import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // creates new object with vaules of state, defines email prop and overwrites to object
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';

// sets initial state
const INITIAL_STATE = {
  email: '',
  password: ''
 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // creates new object with vaules of state, defines email prop and overwrites to object
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

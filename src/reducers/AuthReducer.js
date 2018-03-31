import {
  EMAIL_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  PASSWORD_CHANGED
} from '../actions/types';

// sets initial state
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: ''
 };

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      //'...state' creates new object w vaules of state, defines props & overwrites to object
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '' };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', password: '' };
    default:
      return state;
  }
};

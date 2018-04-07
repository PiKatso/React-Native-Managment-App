import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIALIZE_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIALIZE_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name, value: jane' }
      //  '[action.payload.prop]' is key interpolation to set the key prop
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};

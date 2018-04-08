import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  // get current auth user
  const { currentUser } = firebase.auth();

  return (dispatch) => { //wraps function in redux to satisfy action creator rules
    // get access to firebase DB and reference path to the json data structure
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        // type:reset resets employee view stack in our routing
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    // anytime we get value from this ref get a snapshot
    .on('value', snapshot => {
      // snapshot is not data/more like metadata, .val() gives us access to the data
      dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE
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

  return () => { //wraps function in redux to satisfy action creator rules
    // get access to firebase DB and reference path to the json data structure
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });
  }

};

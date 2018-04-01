import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" navigationBarStyle={styles.navBar}>
        <Scene key="login" component={LoginForm} title="Login" initial={true} style={styles.sceneStyle} />
        <Scene key="employeeList" component={EmployeeList} title="Employees" style={styles.sceneStyle} />
      </Scene>
    </Router>
  );
};

const styles = {
  sceneStyle: {
    flex: 1,
    paddingTop: 55
  }
}

export default RouterComponent;

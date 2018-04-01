import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" initial={true} style={styles.sceneStyle} />
        </Scene>

        <Scene key="main">
          <Scene key="employeeList" component={EmployeeList} title="Employees" style={styles.sceneStyle} />
          <Scene key="employeeDetail" style={styles.sceneStyle} />
        </Scene>

      </Scene>
    </Router>
  );
};

const styles = {
  sceneStyle: {
    flex: 1,
    paddingTop: 64
  }
}

export default RouterComponent;

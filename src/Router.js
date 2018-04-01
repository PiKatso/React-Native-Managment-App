import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
          <Scene key="login" component={LoginForm} title="Login" initial style={styles.sceneStyle} />

          <Scene key="employeeList" component={EmployeeList} title="Employees" hideBackImage={true} style={styles.sceneStyle} />
      </Scene>
    </Router>
  );
};

// style={styles.sceneStyle}
const styles = {
  sceneStyle: {
    paddingTop: 64
  }
}

export default RouterComponent;

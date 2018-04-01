import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 64}}>
      <Scene key="root">
        <Scene key="auth">
          <Scene initial key="login" component={LoginForm} title="Login" />
        </Scene>

        <Scene key="main">
          <Scene key="employeeList" component={EmployeeList} title="Employees" hideBackImage={true} />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = {
  sceneStyle: {
    paddingBottom: 64
  }
}

export default RouterComponent;

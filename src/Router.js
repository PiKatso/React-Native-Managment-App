import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 64}}>
      <Scene key="root">
        <Scene key="auth">
          <Scene initial key="login" component={LoginForm} title="Login" />
        </Scene>

        <Scene key="main">
          <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          hideBackImage={true}
          rightTitle="Add"
          onRight={() => Actions.employeeCreate() }
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;

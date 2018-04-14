import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { employeeUpdate } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';

class EmployeeUpdate extends Component {
  componentWillMount() {
    // takes employee model coming in and prop iterates over it, updateing the reducer withthe props
    _.each(this.props.employee, (value, prop) => {
      this.props.employeUpdate({ prop, value });
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button>
            Update
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, { employeeUpdate })(EmployeeUpdate);

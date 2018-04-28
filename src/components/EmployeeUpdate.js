import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';

import { employeeUpdate, employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeUpdate extends Component { 
  state = { showModal: false };
  
  componentWillMount() {
    // takes employee model coming in and prop iterates over it, updateing the reducer withthe props
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }
  
  onTextPress() {
    const { phone, shift } = this.props;
    
    Communications.text(phone, `your next shift is on ${shift}`);
  }
  
  onAccept() {
    
  }
  
  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Update
          </Button>
        </CardSection>
        
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Send Schedule
          </Button>
        </CardSection>
        
        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Remove Employee
          </Button>
        </CardSection>
        
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to remove this employee?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave
 })(EmployeeUpdate);

import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    // tells action creator to fetch list of employees || async request
    this.props.employeesFetch();

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.employees);
  }

  render() {
    return (
      <View>
        <Text>Potential EmployeeList</Text>
        <Text>Potential EmployeeList</Text>
      </View>
    );
  }
}

export default connect(null, { employeesFetch })(EmployeeList);

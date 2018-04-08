import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    // tells action creator to fetch list of employees || async request
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  // lifecycle method called whenever recieves new set of props
  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props this component will be rendered with
    // this.props is still available as the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
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

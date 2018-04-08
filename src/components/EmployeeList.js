import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';
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

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  // state.employees is a group of key value pairs & to map them returning each with the user id
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

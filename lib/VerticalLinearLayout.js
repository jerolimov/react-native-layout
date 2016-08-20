/*eslint no-unused-vars: 0*/

import React, { Component } from 'react';
import { View } from 'react-native';

export default class VerticalLinearLayout extends Component {
  render() {
    return (
      <View style={ { flexDirection: 'column' } }>
        { this.props.children }
      </View>
      );
  }
}

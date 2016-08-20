/*eslint no-unused-vars: 0*/

import React, { Component } from 'react';
import { View } from 'react-native';

export default class Fill extends Component {
  render() {
    return (
      <View style={ [{ flex: 1 }, this.props.style] }>
        { this.props.children }
      </View>
      );
  }
}

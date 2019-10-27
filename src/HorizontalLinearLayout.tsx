/*eslint no-unused-vars: 0*/

import React, { Component, View } from 'react-native';

export default class HorizontalLinearLayout extends Component {
	render() {
		return (
			<View style={{ flexDirection: 'row' }}>
				{ this.props.children }
			</View>
		);
	}
}

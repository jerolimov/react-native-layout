/*eslint no-unused-vars: 0*/

import React, { Component, View } from 'react-native';

export default class Center extends Component {
	render() {
		return (
			<View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }, this.props.style ]}>
				{ this.props.children }
			</View>
		);
	}
}

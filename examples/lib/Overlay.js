/*eslint no-unused-vars: 0*/

import React, { Component, View } from 'react-native';

export default class Overlay extends Component {
	render() {
		return (
			<View style={[{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'transparent' }, this.props.style ]}>
				{ this.props.children }
			</View>
		);
	}
}

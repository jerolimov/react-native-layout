/*eslint no-unused-vars: 0*/

import React, { Component, View } from 'react-native';

export default class Footer extends Component {
	render() {
		return (
			<View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
				{ this.props.children }
			</View>
		);
	}
}

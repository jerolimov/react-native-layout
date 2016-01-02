/*eslint no-unused-vars: 0*/

import React, { Component, View } from 'react-native';

export default class Header extends Component {
	render() {
		return (
			<View style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
				{ this.props.children }
			</View>
		);
	}
}

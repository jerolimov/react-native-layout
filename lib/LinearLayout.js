/*eslint no-unused-vars: 0*/

import React, { Component, View } from 'react-native';

export const orientation = {
	horizontal: 'horizontal',
	vertical: 'vertical'
};

export default class LinearLayout extends Component {
	render() {
		return (
			<View style={{ flexDirection: this.props.orientation == orientation.horizontal ? 'row' : 'column' }}>
				{ this.props.children }
			</View>
		);
	}
}

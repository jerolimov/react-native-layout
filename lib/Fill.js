
import React, { Component, View } from 'react-native';

export default class Fill {
	render() {
		return (
			<Layout style={[{ flex: 1 }, this.props.style ]}>
				{ this.props.children }
			</Layout>
		);
	}
}

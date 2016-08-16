/*eslint no-unused-vars: 0*/

import React, { Component, View } from 'react-native';

import Overlay from './Overlay';

const reorderSubviews = subviews => {
	if (!subviews.findIndex) {
		return subviews;
	}

	// TODO: RTL

	const horizontalStartIndex = subviews.findIndex(subview => subview.type == Left || subview.type == Right);
	const verticalStartIndex = subviews.findIndex(subview => subview.type == Top || subview.type == Bottom);

	if (horizontalStartIndex !== -1 || verticalStartIndex !== -1) {
		const isHorizontal = horizontalStartIndex < verticalStartIndex && horizontalStartIndex !== -1 || verticalStartIndex === -1;
		const startIndex = isHorizontal ? horizontalStartIndex : verticalStartIndex;

		const before = [], after = [];

		for (var i = startIndex; i < subviews.length; i++) {
			if (isHorizontal && subviews[i].type == Left || !isHorizontal && subviews[i].type == Top) {
				before.push(subviews[i]);
			} else if (isHorizontal && subviews[i].type == Right || !isHorizontal && subviews[i].type == Bottom) {
				after.unshift(subviews[i]);
			} else {
				break;
			}
		}

		const skipped = subviews.slice(0, startIndex);
		const content = subviews.slice(i).filter(subview => subview.type != Overlay);
		const overlays = subviews.slice(i).filter(subview => subview.type == Overlay);

		const reordered = skipped.concat(before).concat(reorderSubviews(content)).concat(after).concat(overlays);

		return <View style={{ flex: 1, flexDirection: isHorizontal ? 'row' : 'column' }}>{ reordered }</View>;
	}

	return subviews;
};

export class Layout extends Component {
	render() {
		return (
			<View style={ this.props.style }>
				{ this.props.children && reorderSubviews(this.props.children) }
			</View>
		);
	}
}

export class Fill extends Component {
	render() {
		return (
			<Layout style={[{ flex: 1 }, this.props.style ]}>
				{ this.props.children && reorderSubviews(this.props.children) }
			</Layout>
		);
	}
}

export class Left extends Layout {}
export class Right extends Layout {}
export class Top extends Layout {}
export class Bottom extends Layout {}

export default {
	Layout,
	Fill,
	Top,
	Left,
	Right,
	Bottom
};

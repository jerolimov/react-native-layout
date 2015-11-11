
import React, { Component, View, Text } from 'react-native';

import { Layout, Top, Left, Right, Bottom } from '../BorderLayout';

export default class BorderLayoutExample1 extends Component {
	render() {
		return (
			<Layout style={{ flex: 1, marginTop: 20 }}>
				<Top><Text style={{ borderColor: 'gray', borderWidth: 1 }}>TOP 1</Text></Top>
				<Top><Text style={{ borderColor: 'gray', borderWidth: 1 }}>TOP 2</Text></Top>
				<Left><Text style={{ borderColor: 'gray', borderWidth: 1 }}>LEFT 1</Text></Left>
				<Right><Text style={{ borderColor: 'gray', borderWidth: 1 }}>RIGHT 1</Text></Right>
				<Left><Text style={{ borderColor: 'gray', borderWidth: 1 }}>LEFT 2</Text></Left>
				<Bottom><Text style={{ borderColor: 'gray', borderWidth: 1 }}>BOTTOM 1</Text></Bottom>
				<Right><Text style={{ borderColor: 'gray', borderWidth: 1 }}>RIGHT 2</Text></Right>
				<Bottom><Text style={{ borderColor: 'gray', borderWidth: 1 }}>BOTTOM 2</Text></Bottom>
				<View style={{ borderColor: 'gray', borderWidth: 1, flex: 1 }}><Text>Content</Text></View>
			</Layout>
		);
	}
}

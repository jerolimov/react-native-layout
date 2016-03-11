
import React, { Component, View, Text } from 'react-native';

import { FillLayout, Top, Left, Right, Bottom } from './lib/BorderLayout';
import Center from './lib/Center';

export default class BorderLayoutExample2 extends Component {
	render() {
		return (
			<FillLayout>
				<Top style={{ paddingTop: 20, flexDirection: 'row' }}>
					<Center style={{ height: 44 }}>
						<Text style={{ fontSize: 18 }}>Hallo</Text>
					</Center>
				</Top>
				<Bottom style={{ height: 50 }} />

				<Left style={{ width: 100, borderColor: 'gray', borderWidth: 1, backgroundColor: 'lightblue' }} />
				<Right style={{ width: 100, borderColor: 'gray', borderWidth: 1, backgroundColor: 'lightblue' }} />

				<View style={{ flex: 1, borderColor: 'gray', borderWidth: 1, backgroundColor: 'lightgreen' }} />
			</FillLayout>
		);
	}
}

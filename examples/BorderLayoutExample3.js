
import React, { Component, View, Text } from 'react-native';

import { FillLayout, Top, Left, Right, Bottom } from './lib/BorderLayout';
import Center from './lib/Center';
import Overlay from './lib/Overlay';

export default class BorderLayoutExample3 extends Component {
	constructor() {
		super();
		this.state = {
			overlay: false
		};
	}

	render() {
		const { overlay } = this.state;

		return (
			<FillLayout>
				<Top style={{ paddingTop: 20, flexDirection: 'row' }}>
					<Center style={{ height: 44 }}>
						<Text style={{ fontSize: 18 }}>Hallo</Text>
					</Center>
				</Top>
				<Bottom>
					<Center style={{ flexDirection: 'row' }}>
						<View style={{ width: 80, height: 50, marginHorizontal: 5, backgroundColor: 'lightgray' }} />
						<View style={{ width: 80, height: 50, marginHorizontal: 5, backgroundColor: 'lightgray' }} />
						<View style={{ width: 80, height: 50, marginHorizontal: 5, backgroundColor: 'lightgray' }} />
					</Center>
				</Bottom>

				<Left style={{ backgroundColor: 'red' }}>
					<Top><Text style={{ width: 120, padding: 10, flex: 1, borderColor: 'gray', borderWidth: 1, backgroundColor: 'lightblue' }}>Navigation 1</Text></Top>
					<Bottom><Text style={{ width: 120, padding: 10, flex: 1, borderColor: 'gray', borderWidth: 1, backgroundColor: 'lightblue' }}>Navigation 2</Text></Bottom>
					<Top><Text style={{ width: 120, padding: 10, flex: 1, borderColor: 'gray', borderWidth: 1, backgroundColor: 'lightblue' }}>Navigation 3</Text></Top>
				</Left>
				<Right>
					<Text style={{ width: 120, padding: 10, flex: 1, borderColor: 'gray', borderWidth: 1, backgroundColor: 'lightblue' }}>Sidebar</Text>
				</Right>

				<View style={{ padding: 10, flex: 1, borderColor: 'gray', borderWidth: 1, backgroundColor: 'lightgreen' }}>
					<Text onPress={ this.setState.bind(this, { overlay: true }) } style={{ color: 'blue' }}>Click here!</Text>
				</View>

				{ overlay &&
					<Overlay style={{ opacity: 0.7, backgroundColor: 'black' }} />
				}
				{ overlay &&
					<Overlay>
						<Center>
							<View style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 10, backgroundColor: 'white' }}>
								<Text style={{ margin: 20, textAlign: 'center', fontWeight: 'bold' }}>Hello Overlay!</Text>
								<Text style={{ marginVertical: 0, marginHorizontal: 20, textAlign: 'center' }}>More content in the second line!</Text>
								<Text onPress={ this.setState.bind(this, { overlay: false }) } style={{ margin: 20, textAlign: 'center', color: 'blue' }}>OK</Text>
							</View>
						</Center>
					</Overlay>
				}
			</FillLayout>
		);
	}
}

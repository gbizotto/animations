/**
https://medium.com/react-native-training/react-native-animations-using-the-animated-api-ebe8e0669fae
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';

import { StackNavigator, Header } from 'react-navigation';

import Spin from './src/Spin';



import Timing from './src/Timing';

class App extends Component {

	render() {

		return (
			<View style={styles.container}>
				<Button title='Go to Spin example' onPress={() => this.props.navigation.navigate('Spin')} />
				<Button title='Go to Timing example' onPress={() => this.props.navigation.navigate('Timing')} />
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	}
});


export default StackNavigator({
	Home: {
		screen: App,
	  },
	Spin: {
        screen: Spin,
	},
	Timing: {
        screen: Timing,
    }
});

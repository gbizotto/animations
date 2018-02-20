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
import Spring from './src/Spring';
import Parallel from './src/Parallel';
import Message from './src/Message';

class App extends Component {

	render() {

		return (
			<View style={styles.container}>
				<Button title='Go to Spin example' onPress={() => this.props.navigation.navigate('Spin')} />
				<Button title='Go to Timing example' onPress={() => this.props.navigation.navigate('Timing')} />
				<Button title='Go to Spring example' onPress={() => this.props.navigation.navigate('Spring')} />
				<Button title='Go to Parallel example' onPress={() => this.props.navigation.navigate('Parallel')} />
				<Button title='Go to Message example' onPress={() => this.props.navigation.navigate('Message')} />
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
    },
	Spring: {
        screen: Spring,
    },
	Parallel: {
        screen: Parallel,
    },
	Message: {
        screen: Message,
    }
});

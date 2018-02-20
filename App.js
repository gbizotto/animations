/**
https://medium.com/react-native-training/react-native-animations-using-the-animated-api-ebe8e0669fae
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import { StackNavigator, Header } from 'react-navigation';

import Spin from './src/Spin';

class App extends Component {

	render() {

		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Spin')}>
					<Text>Go to Spin example</Text>
				</TouchableOpacity>
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});


export default StackNavigator({
	Home: {
		screen: App,
	  },
	Spin: {
        screen: Spin,
    }
});

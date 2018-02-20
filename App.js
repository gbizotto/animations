/**
https://medium.com/react-native-training/react-native-animations-using-the-animated-api-ebe8e0669fae
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Animated,
	Image,
	Easing
} from 'react-native';

export default class App extends Component {

	constructor () {
		super();
		this.spinValue = new Animated.Value(0);
	}

	componentDidMount () {
		this.spin()
	}

	spin = () => {
		this.spinValue.setValue(0);

		Animated.timing(
			this.spinValue,
		  	{
				toValue: 1,
				duration: 3000,
				easing: Easing.linear
			}
		).start(() => this.spin());
	}

	render() {
		const spin = this.spinValue.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg']
		})

		return (
			<View style={styles.container}>
				<Animated.Image
					style={{
					width: 50,
					height: 50,
					transform: [{rotate: spin}] }}
					source={require('./assets/ticketOn.png')} />
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	}
});

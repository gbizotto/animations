import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Animated,
	Image,
    Easing,
    Button
} from 'react-native';

export default class Spring extends Component {

	constructor () {
		super();
		this.springValue = new Animated.Value(0.3);
	}

	spring () {
        this.springValue.setValue(0.3)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1
            }
        ).start();
    }

	render() {
		return (
			<View style={styles.container}>
				<Button
                    style={{marginBottom: 100}}
                    title='Spring!'
                    onPress={this.spring.bind(this)} />
                <Animated.Image
                    style={{ width: 200, height: 200, transform: [{scale: this.springValue}] }}
                    source={require('../assets/ticketOn.png')} />
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

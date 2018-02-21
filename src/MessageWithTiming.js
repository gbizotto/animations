import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Animated,
	Image,
    Easing,
} from 'react-native';

export default class MessageWithTiming extends Component {

    state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }

    componentDidMount () {
        this.animate(true);

        setTimeout(() => {
            this.animate(false);
        }, 4000);
    }

    animate = (fadeIn) => {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
              toValue: fadeIn ? 1 : 0,                   // Animate to opacity: 1 (opaque)
              duration: 1000,              // Make it take a while
              easing: Easing.linear
            }
        ).start();   
    }

    render () {
        return (
            <Animated.View style={[styles.containerStyle, {opacity: this.state.fadeAnim}]}>
                <Image
					style={{
					width: 40,
					height: 40,}}
					source={require('../assets/ticketOn.png')} />
                <View style={styles.messageContainer}>
                    <Text style={styles.messageStyle}>Ops! O tipo de ingresso que você selecionou</Text>
                    <Text style={styles.messageStyle}>está esgotado ou indisponível</Text>
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
	containerStyle: {
		width: '100%',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: 14,
        paddingBottom: 14,
        backgroundColor: 'rgb(255, 185, 14)',
    },
    messageContainer: {
        marginLeft: 16
    },
    messageStyle: {
        color: 'white',
        fontSize: 15,
    },
});

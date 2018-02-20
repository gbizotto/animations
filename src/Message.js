import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Animated,
	Image,
    Easing,
    TouchableHighlight
} from 'react-native';

export default class Message extends Component {

    constructor () {
        super();
        this.animatedValue3 = new Animated.Value(0);
    }

    componentDidMount () {
        this.animate()
    }

    animate = () => {
        this.animatedValue3.setValue(0)
        const createAnimation = function (value, duration, easing, delay = 0) {
            return Animated.timing(
                value,
                {
                    toValue: 1,
                    duration,
                    easing,
                    delay
                }
            )
        }
        Animated.parallel([
            createAnimation(this.animatedValue3, 1000, Easing.ease)        
        ]).start()
    }

    render () {
        const introButton = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 0]
        })

        return (
            <Animated.View style={[styles.containerStyle, {top: introButton, position: 'absolute'}]}>
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

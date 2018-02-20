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

export default class Message extends Component {

    constructor () {
        super();
        this.animatedValue3 = new Animated.Value(0);

        this.down = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 0]
        })


        this.state = {
            down: this.down
        }
    }

    componentDidMount () {
        // this.animate();
        this.animateDown();
        this.animateUp();
    }

    animateUp = () => {
        setTimeout(() => {

            console.log('vai começar animateUp');
            let down = this.animatedValue3.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -100]
            })

            this.setState({down: down})

            this.animate();

        }, 5000);
    }

    animateDown = () => {
        console.log('vai começar animateDown');
        this.animatedValue3.setValue(0);
        this.animate();
    }

    animate = () => {
        console.log('vai começar animate');
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
        ]).start();

        
    }

    render () {
        return (
            <Animated.View style={[styles.containerStyle, {top: this.state.down, position: 'absolute'}]}>
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

import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

class Button extends Component {
    render() {
        const {
            buttonActive,
            text,
            onPress,
            color,
            underlayColor
        } = this.props;
        const {
            button,
            buttonTransparent,
            textColorWhite,
            textStyle
        } = styles;
        if (buttonActive === false) {
            return (
                <TouchableHighlight
                    style={[
                        button,
                        buttonTransparent,
                        { backgroundColor: this.props.colorInactive }
                    ]}
                    disabled
                >
                    <Text style={[textColorWhite, textStyle]} >
                        {text}
                    </Text>
                </TouchableHighlight>
            );
        }
        return (
            <TouchableHighlight
                style={[button, { backgroundColor: color }]}
                underlayColor={underlayColor}
                onPress={onPress}
            >
                <Text
                    style={[textStyle, textColorWhite]}
                >
                    {text}
                </Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        maxHeight: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 45,
        elevation: 2,
        padding: 15,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
    textColorWhite: {
        color: 'white'
    },
    buttonTransparent: {
        elevation: 0,
    }
});

export { Button };

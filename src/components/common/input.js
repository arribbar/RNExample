import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

class Input extends Component {

    render() {
        const { inputStyle, labelStyle, containerStyle, textStyle } = styles;

        const {
            label,
            value,
            onChangeText,
            placeholder,
            secureTextEntry,
            keyboardType = 'default',
            returnKeyType = 'next',
            onSubmitEditing,
        } = this.props;

        return (
            <View
                style={containerStyle}
            >
                <TextInput
                    value={value}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    style={[inputStyle, textStyle]}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    autoCapitalize='none'
                    onSubmitEditing={onSubmitEditing}
                    autoCorrect={false}
                    returnKeyType={returnKeyType}
                    selectTextOnFocus
                />
                <Text
                    style={[textStyle, labelStyle]}
                    numberOfLines={1}
                >
                    {label}
                </Text>
            </View>
        );
    }
}

const styles = {
  inputStyle: {
    flex: 1,
    alignSelf: 'stretch',
    color: 'grey',
  },
  labelStyle: {
    flex: 1,
    color: 'grey',
    alignSelf: 'flex-start',
  },
  containerStyle: {
    alignSelf: 'stretch',
    marginHorizontal: 40,
    minHeight: 60,
    flex: 1,
  },
  textStyle: {
    fontSize: 15,
  }
};

export { Input };

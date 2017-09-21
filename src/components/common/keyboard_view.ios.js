import React from 'react';
import { KeyboardAvoidingView } from 'react-native';


const KeyboardView = ({ containerStyle, children }) => {
    return (
        <KeyboardAvoidingView
            style={containerStyle}
            behavior='padding'
        >
            {children}
        </KeyboardAvoidingView>
    );
};

export { KeyboardView };

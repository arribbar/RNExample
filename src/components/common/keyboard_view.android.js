import React from 'react';
import { View } from 'react-native';


const KeyboardView = ({ containerStyle, children }) => {
    return (
        <View
            style={containerStyle}
        >
            {children}
        </View>
    );
};

export { KeyboardView };

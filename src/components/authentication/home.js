import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import { connect } from 'react-redux';


class Home extends Component {

    render() {
        const {
            container,
            text
        } = styles;

        return (
            <View
                style={container}
            >
                <Text style={text}>
                    Hello {this.props.email}
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        flex: 1,
        alignSelf: 'center'
    },
});

const mapStateToProps = ({ auth }) => {
    const {
        email,
    } = auth;

    return {
        email,
    };
};


export default connect(mapStateToProps, {})(Home);

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import { connect } from 'react-redux';


class ResultPage extends Component {

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
                    URL to be shared: {this.props.data.value}
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

const mapStateToProps = ({ share }) => {
    const {
        data,
    } = share;

    return {
        data,
    };
};


export default connect(mapStateToProps, {})(ResultPage);

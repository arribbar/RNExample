import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import { connect } from 'react-redux';
import ShareExtension from 'react-native-share-extension';


import {
    saveData,
    shareData
} from '../../actions';

import {
    Button,
} from '../common';



class SavePage extends Component {
    componentDidMount() {
        this.waitExtensionData();
    }

    async waitExtensionData() {
        try {
            const data = await ShareExtension.data();
            console.log('------ Element of the share Android extension ------');
            console.log('data: ', data);
            this.props.shareData(data);
        } catch (e) {
            console.log('There was an error fetching the element to share : ', e);
        }
    }

    onPress() {
        this.props.saveData();
    }


    renderButtons() {
        const {
            buttonContainer,
        } = styles;
        return (
            <View style={buttonContainer}>
                <Button
                    text={'Save'}
                    buttonActive={true}
                    color={'red'}
                    onPress={this.onPress.bind(this)}
                />
            </View>
        );
    }


    render() {
        const {
            container,
            inputContainer,
            text
        } = styles;

        return (
                <View
                    style={container}
                >
                    <View
                        style={inputContainer}
                    >
                        <Text style={text}>
                            Hello {this.props.email}
                        </Text>
                    </View>
                    {this.renderButtons()}
                </View>
            );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    inputContainer: {
        flex: 5,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        },
    buttonContainer: {
        flexDirection: 'column',
        flex: 3,
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        marginHorizontal: 40,
    },
    text: {
        flex: 1,
        alignSelf: 'center'
    },
});

const mapStateToProps = ({ share, auth }) => {
    const {
        data,
    } = share;

    const {
        email,
    } = auth;


    return {
        data,
        email
    };
};


export default connect(mapStateToProps, {
    saveData,
    shareData
})(SavePage);

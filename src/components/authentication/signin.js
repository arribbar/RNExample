import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';

import {
    emailChanged,
    passwordChanged,
    loginUser
} from '../../actions';

import {
    Button,
    Input,
    KeyboardView,
} from '../common';



class Signin extends Component {
    onChangeTextPassword(text) {
        this.props.passwordChanged(text);
    }

    onChangeTextEmail(text) {
        this.props.emailChanged(text);
    }

    onLoginPress() {
        //log the user in
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }


    renderButtons() {
        const {
            buttonContainer,
        } = styles;
        return (
            <View style={buttonContainer}>
                <Button
                    text={'Sign in'}
                    buttonActive={this.props.passwordEdited &&
                        this.props.emailEdited}
                    color={'red'}
                    colorInactive={'grey'}
                    onPress={this.onLoginPress.bind(this)}
                />
            </View>
        );
    }


    render() {
        const {
            container,
            inputContainer,
            formContainer
        } = styles;

        return (
            <KeyboardView
                containerStyle={container}
            >
                <View
                    style={formContainer}
                >
                    <View
                        style={inputContainer}
                    >
                        <Input
                            label="Email"
                            placeholder="your.email@mail.com"
                            value={this.props.email}
                            keyboardType='email-address'
                            onChangeText={this.onChangeTextEmail.bind(this)}
                        />
                        <Input
                            label="Password"
                            placeholder="password"
                            value={this.props.password}
                            onChangeText={this.onChangeTextPassword.bind(this)}
                            secureTextEntry
                            onSubmitEditing={() => { this.onLoginPress(); }}
                        />
                    </View>
                    {this.renderButtons()}
                </View>
            </KeyboardView>
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
    formContainer: {
        flex: 6,
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
});

const mapStateToProps = ({ auth }) => {
    const {
        email,
        emailEdited,
        password,
        passwordEdited,
    } = auth;


    return {
        email,
        emailEdited,
        password,
        passwordEdited,
    };
};


export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(Signin);

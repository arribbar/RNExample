import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import Result from './components/share/result';
import Save from './components/share/save';
import Login from './components/authentication/signin';
import Home from './components/authentication/home';

const iconQuit = require('./images/quit.png'); // eslint-disable-line

const RouterComponent = () => {
    <Router>
        <Scene
            key='root'
        >
            <Scene
                key='auth'
                hideNavBar
            >
                <Scene
                    key='signin'
                    initial
                >
                    <Scene
                        key='login'
                        component={Login}
                        title='Sign in'
                    />
                </Scene>
            </Scene>
            <Scene
                key='home'
                component={Home}
                title='Home'
            />
            <Scene
                key='share'
                hideNavBar
                rightButtonImage={iconQuit}
                onRight={() => ShareExtension.close()}
            >
                <Scene
                    key='save'
                    component={Save}
                    initial
                    navigationBarStyle={styles.navBarRed}
                    title='Save'
                />
                <Scene
                    key='result'
                    component={Result}
                    navigationBarStyle={styles.navBarRed}
                    title='Result'
                />
            </Scene>
        </Scene>
    </Router>
}

const styles = StyleSheet.create({
    navBarRed: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'red',
    },
});

export default RouterComponent;

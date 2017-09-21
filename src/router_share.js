import React from 'react';
import { StyleSheet } from 'react-native';

import ShareExtension from 'react-native-share-extension';
import { Router, Scene } from 'react-native-router-flux';

import Result from './components/share/result';
import Save from './components/share/save';

const iconQuit = require('./images/quit.png'); // eslint-disable-line

const RouterShareComponent = () => {
    return (
        <Router
            key='share'
        >
            <Scene
                key='root'
            >
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
    );
};

const styles = StyleSheet.create({
    navBarRed: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'red',
    },
});

export default RouterShareComponent;

import React from 'react';

import { Router, Scene } from 'react-native-router-flux';

import Login from './components/authentication/signin';
import Home from './components/authentication/home';

const RouterMainComponent = () => {
    return (
        <Router
            key='main'
        >
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
            </Scene>
        </Router>
    );
};

export default RouterMainComponent;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';

import Router from './router_share';
import configureStore from './store';

const store = configureStore();


class Share extends Component {
    render() {
        return (
            <Provider store={store} >
                <Router />

            </Provider>
        );
    }
}


export default Share;

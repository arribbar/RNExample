import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Router from './router_main';
import configureStore from './store';

const store = configureStore();


class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
};

export default Root;

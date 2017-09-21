import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

export default function configureStore() {

    const store = createStore(
        reducers,
        applyMiddleware(...[
          thunk
        ])
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
          const nextRootReducer = reducers;
          store.replaceReducer(nextRootReducer);
        });
      }

    return store;
}

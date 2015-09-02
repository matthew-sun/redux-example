import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

var buildStore;

if(__DEBUG__) {
    buildStore = compose(
      applyMiddleware(thunk),
      require('redux-devtools').devTools(),
      require('redux-devtools').persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore)
}else {
    buildStore = compose(applyMiddleware(thunk))(createStore)
}

export default function configureStore(initialState) {
  const store = buildStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
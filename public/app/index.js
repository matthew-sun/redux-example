import '../css/pure.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './configureStore';

const store = configureStore();

function renderDevTools(store) {
  if (__DEBUG__) {
    let {DevTools, DebugPanel, LogMonitor} = require('redux-devtools/lib/react');
    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }else {
    return null;
  }
}


React.render(
    <div>
        <Provider store={store}>
            {() => <App /> }
        </Provider>
        {renderDevTools(store)}
    </div>,
    document.getElementById('app'));
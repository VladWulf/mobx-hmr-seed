import React from 'react';
import { render } from 'react-dom';
import './index.css';

import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';

import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
}
const history = syncHistoryWithStore(browserHistory, routingStore);

const Root = (
  <Provider { ...stores }>
    <Router history={ history }>
      <App />
    </Router>
  </Provider>
)


render(Root, document.getElementById('root'));
// registerServiceWorker();

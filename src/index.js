import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from "./redux/store/configureStore"
import registerServiceWorker from './registerServiceWorker';
import Router from './router/index'

ReactDOM.render((
  <Provider store={store}>
    <div>
      <Router></Router>
    </div>
  </Provider>
), document.getElementById("root"));
registerServiceWorker();

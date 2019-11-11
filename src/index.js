import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import './Components.css';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import ErrorBoundry from './components/error-boundry';
import  ProductstoreService from './services/productstore-service';
import {ProductstoreServiceProvider} from './components/productstore-service-context';

import store from './store';

const productstoreService = new ProductstoreService();
const application =(
  <Provider store ={store}>
    <ErrorBoundry>
      <ProductstoreServiceProvider value = {productstoreService}>
        <Router>
          <App/>
        </Router>
      </ProductstoreServiceProvider>
    </ErrorBoundry>
  </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


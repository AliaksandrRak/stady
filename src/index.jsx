import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {mainReduser} from './redusers/mainReduser'

const redux = require('redux');

const reducers = redux.combineReducers({
    mainReduser
});

const store = redux.createStore(reducers);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Switch>
                <Route path='/' component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

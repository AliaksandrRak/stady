import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/home/Home';
import Help from './Components/help/Help';
import Contacts from './Components/contacts/Contacts';
import Search from './Components/search/Search';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { mainReduser } from './redusers/mainReduser'

const redux = require('redux');

const reducers = redux.combineReducers({
    mainReduser
});

const store = redux.createStore(reducers);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/help' component={Help} />
                <Route path='/contacts' component={Contacts} />
                {/* <Route path='/search' component={Search} /> */}
                <Route exact path="/">
                    <Redirect to="/home" /> 
                </Route>

            </Switch>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

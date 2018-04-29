import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import {applyMiddleware, createStore, compose} from 'redux';
import RootReducer from './reducer/RootReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(RootReducer, enhancer);

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import { getRootReducer } from './reducer';
import { proxy } from './pages/modelproxy';

export const store = createStore(
    getRootReducer(),
    applyMiddleware(
        thunk.withExtraArgument(proxy),
        promiseMiddleware,
    )
);
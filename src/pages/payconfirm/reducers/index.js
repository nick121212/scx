import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';


import { reducer as payconfirm } from './payconfirm';
import { reKey as payconfirmKey } from '../constants/payconfirm';


const reducers = reduceReducers(
    combineReducers({
        [payconfirmKey]: payconfirm
    })
);

export { reducers };
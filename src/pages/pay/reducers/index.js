import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';


import { reducer as pay } from './pay';
import { reKey as payKey } from '../constants/pay';


const reducers = reduceReducers(
    combineReducers({
        [payKey]: pay
    })
);

export { reducers };
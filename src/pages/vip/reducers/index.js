import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';


import { reducer as vip } from './vip';
import { reKey as vipKey } from '../constants/vip';


const reducers = reduceReducers(
    combineReducers({
        [vipKey]: vip
    })
);

export { reducers };
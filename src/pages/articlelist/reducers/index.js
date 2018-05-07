import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';


import { reducer as articlelist } from './articlelist';
import { reKey as articlelistKey } from '../constants/articlelist';


const reducers = reduceReducers(
    combineReducers({
        [articlelistKey]: articlelist
    })
);

export { reducers };
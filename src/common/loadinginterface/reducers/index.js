import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';


import { reducer as datalist } from './datalist';
import { reKey as datalistkey } from '../constants/datalist';


const reducers = reduceReducers(
    combineReducers({
        [datalistkey]: datalist
    })
);

export { reducers };
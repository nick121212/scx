import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';
import {reducer as loading } from './loading';
import {reKey as loadingKey} from '../constants/loading';

const reducers =
    combineReducers({
        [loadingKey]:loading
    })
;

export{reducers};

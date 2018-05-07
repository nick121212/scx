import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';
import {reducer as usrInfo } from './usrbaseinfo';
import {reKey as usrInfoKey} from '../constants/usrbaseinfo';

const reducers =
    combineReducers({
        [usrInfoKey]:usrInfo
    })
;

export{reducers};

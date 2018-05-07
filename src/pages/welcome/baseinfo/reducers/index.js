import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';
import {reducer as logincheckinfo } from './logincheckinfo';
import {reKey as checkinfoKey} from '../constants/logincheckinfo';

const reducers =
    combineReducers({
        [checkinfoKey]:logincheckinfo
    })
;

export{reducers};

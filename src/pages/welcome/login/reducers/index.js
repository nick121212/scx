import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';
import {reducer as login } from './login';
import {reKey as loginKey} from '../constants/login';

const reducers =
    combineReducers({
        [loginKey]:login
    })
;

export{reducers};

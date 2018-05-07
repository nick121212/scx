import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';

import {reducer as loginbenefit} from './loginbenefit';
import {reKey as loginbenefitKey} from '../constants/loginbenefit';

const reducers = reduceReducers( 
        combineReducers({
            [loginbenefitKey]:loginbenefit,
        })
    
);
export {reducers};
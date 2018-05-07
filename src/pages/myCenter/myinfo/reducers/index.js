import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';


import {reducer as myinfo} from './myinfo';
import {reKey as myinfokey} from '../constants/myinfo';




const reducers = reduceReducers( 
        combineReducers({
            [myinfokey]:myinfo,
        })
    
);
export {reducers};
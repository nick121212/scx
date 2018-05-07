import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';

import {reducer as joinunion} from './joinunion';
import {reKey as joinunionKey} from '../constants/joinunion';


const reducers = reduceReducers( 
        combineReducers({
            [joinunionKey]:joinunion
        })
    
);
export {reducers};
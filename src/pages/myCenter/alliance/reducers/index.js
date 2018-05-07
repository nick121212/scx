import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';

import {reducer as main} from './main';
import {reKey as mainKey} from '../constants/main';

import {reducer as myunion} from './myunion';
import {reKey as myunionkey} from '../constants/myunion';

import {reducer as otherunion} from './otherunion';
import {reKey as otherunionkey} from '../constants/otherunion';

import {reducer as historyunion} from './historyunion';
import {reKey as historyunionkey} from '../constants/historyunion'

const reducers = reduceReducers( 
        combineReducers({
            [mainKey]:main,
            [myunionkey]:myunion,
            [otherunionkey]:otherunion,
            [historyunionkey]:historyunion
        })
    
);
export {reducers};
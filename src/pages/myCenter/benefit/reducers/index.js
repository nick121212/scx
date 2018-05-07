import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';


import {reducer as main} from './main';
import {reKey as mainKey} from '../constants/main';

import {reducer as curbenefit} from './curbenefit';
import {reKey as curbenefitKey} from '../constants/curbenefit';

import {reducer as historybenefit} from './historybenefit';
import {reKey as historybenefitkey} from '../constants/historybenefit';


const reducers = reduceReducers( 
        combineReducers({
            [mainKey]:main,
            [curbenefitKey]:curbenefit,
            [historybenefitkey]:historybenefit
        })
    
);
export {reducers};
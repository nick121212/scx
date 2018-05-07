import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';

import { reducer as order } from './order';
import { reKey as orderKey } from '../constants/order';

import { reducer as history } from './history';
import { reKey as historyKey } from '../constants/history';

import { reducer as main } from './main';
import { reKey as mainKey } from '../constants/main';


const reducers = reduceReducers(
    combineReducers({
        [orderKey]: order,
        [mainKey]: main,
        [historyKey]: history
    })
);
export { reducers };

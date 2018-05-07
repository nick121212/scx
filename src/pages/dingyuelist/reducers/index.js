import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';

import {reducer as main} from './main';
import {reKey as mainKey} from '../constants/main';
import { reducer as dingyuelist } from './dingyuelist';
import { reKey as dingyuelistKey } from '../constants/dingyuelist';
// import { reducer as myqingbao } from './myqingbao';
// import { reKey as myqingbaoKey } from '../constants/myqingbao';

const reducers = reduceReducers(
    combineReducers({
        [dingyuelistKey]: dingyuelist,
        [mainKey]:main,

    })
);

export { reducers };
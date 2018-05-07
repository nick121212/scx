import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';

import { reducer as qingbaobriefinfo } from './qingbaobriefinfo';
import { reKey as qingbaobriefinfoKey } from '../constants/qingbaobriefinfo';

const reducers = reduceReducers(
    combineReducers({
        [qingbaobriefinfoKey]: qingbaobriefinfo
    })
);

export { reducers };
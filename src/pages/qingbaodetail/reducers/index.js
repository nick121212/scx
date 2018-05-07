import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';

import { reducer as qingbaodetail } from './qingbaodetail';
import { reKey as qingbaodetailKey } from '../constants/qingbaodetail';

const reducers = reduceReducers(
    combineReducers({
        [qingbaodetailKey]: qingbaodetail
    })
);

export { reducers };
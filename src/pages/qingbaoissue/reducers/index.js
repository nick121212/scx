import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';

import { reducer as qingbaoissue } from './qingbaoissue';
import { reKey as qingbaoissueKey } from '../constants/qingbaoissue';

const reducers = reduceReducers(
    combineReducers({
        [qingbaoissueKey]: qingbaoissue
    })
);

export { reducers };
import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';

import { reducer as articlebriefinfo } from './articlebriefinfo';
import { reKey as articlebriefinfoKey } from '../constants/articlebriefinfo';

const reducers = reduceReducers(
    combineReducers({
        [articlebriefinfoKey]: articlebriefinfo
    })
);

export { reducers };
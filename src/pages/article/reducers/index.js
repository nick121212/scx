import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';

import { reducer as article } from './article';
import { reKey as articleKey } from '../constants/article';

const reducers = reduceReducers(
    combineReducers({
        [articleKey]: article
    })
);

export { reducers };
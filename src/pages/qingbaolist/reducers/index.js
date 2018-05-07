import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';


import { reducer as qingbaolist } from './qingbaolist';
import { reKey as qingbaolistkey } from '../constants/qingbaolist';


const reducers = reduceReducers(
    combineReducers({
        [qingbaolistkey]: qingbaolist
    })
);

export { reducers };
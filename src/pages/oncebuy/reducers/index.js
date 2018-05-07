import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';


import { reducer as oncebuy } from './oncebuy';
import { reKey as oncebuyKey } from '../constants/oncebuy';


const reducers = reduceReducers(
    combineReducers({
        [oncebuyKey]: oncebuy
    })
);

export { reducers };
import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';

import { reducer as settings } from './settings';
import { reKey as settingsKey } from '../constants/settings';

export const reducers = reduceReducers(
    combineReducers({
        [settingsKey]: settings
    }));

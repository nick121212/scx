import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';

import { reducer as chart } from './chart';
import { reKey as chartKey } from '../constants/chart';

import { reducer as article } from './article';
import { reKey as articleKey } from '../constants/article';

import { reducer as banner } from './banner';
import { reKey as bannerKey } from '../constants/banner';

import { reducer as order } from './order';
import { reKey as orderKey } from '../constants/order';

import { reducer as bi } from './baseinfo';
import { reKey as biKey } from '../constants/baseinfo';
import { reducer as grid } from './grid';
import { reKey as gridKey } from '../constants/grid';

const reducers = reduceReducers(
    combineReducers({
        [chartKey]: chart,
        [articleKey]: article,
        [bannerKey]: banner,
        [orderKey]: order,
        [biKey]: bi,
        [gridKey]:grid
    })
);

export { reducers };
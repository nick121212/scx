import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/chart';

export const getChartDataAction = createAction(Actions.FETCH);
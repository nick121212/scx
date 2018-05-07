import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/baseinfo';

export const getBaseInfoAction = createAction(Actions.BASEINFO);
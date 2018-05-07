import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/qingbaobriefinfo';

export const getQingbaoBriefInfoAction = createAction(Actions.FETCH);
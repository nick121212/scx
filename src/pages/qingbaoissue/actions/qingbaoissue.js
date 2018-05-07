import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/qingbaoissue';

export const getQingBaoIssues = createAction(Actions.FETCH);
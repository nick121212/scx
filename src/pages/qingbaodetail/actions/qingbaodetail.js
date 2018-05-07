import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/qingbaodetail';

export const getQingBaoDetail = createAction(Actions.FETCH);
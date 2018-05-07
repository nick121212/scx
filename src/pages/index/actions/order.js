import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/order';

export const getOrdersAction = createAction(Actions.FETCH);
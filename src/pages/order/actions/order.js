import { createAction } from 'redux-actions';

import { Actions } from '../constants/order';

export const getOrdersAction = createAction(Actions.FETCH);
export const createOrderAction = createAction(Actions.CREATE);
export const setLoadingAction = createAction(Actions.SETLOADING);

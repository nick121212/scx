import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/pay';

export const reqPay = createAction(Actions.PAY);

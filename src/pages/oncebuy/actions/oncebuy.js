import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/oncebuy';

export const selectBuyOnce = createAction(Actions.SELECT_ONECEBUY);
export const selectBuyType = createAction(Actions.SET_BUY_TYPE);
export const saveSinglePiceInfo= createAction(Actions.SAVE_SINGLE_PRICE_INFO);

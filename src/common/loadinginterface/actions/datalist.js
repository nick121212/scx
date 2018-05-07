import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/datalist';

export const getDatalistAction = createAction(Actions.FETCH);
export const setLoadingAction = createAction(Actions.SETLOADING);
export const setHasMoreAction = createAction(Actions.SETHASMORE);
export const setPagInfoAction = createAction(Actions.SETPAGINFO);
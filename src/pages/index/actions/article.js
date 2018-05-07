import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/article';

export const getArticlesAction = createAction(Actions.FETCH);
export const setLoadingAction = createAction(Actions.SETLOADING);
export const setHasMoreAction = createAction(Actions.SETHASMORE);
export const setPagInfoAction = createAction(Actions.SETPAGINFO);

export const changeIndexArticleStatus = createAction(Actions.CHANGE_STATUS);
export const changeIndexAllArticleStatus = createAction(Actions.CHANGE_ALL_SATTUS);
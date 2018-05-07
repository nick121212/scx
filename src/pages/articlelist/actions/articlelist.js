import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/articlelist';

export const getShuLianListAction = createAction(Actions.FETCH_SHULIANBANG);
export const setShuLianLoadingAction = createAction(Actions.SET_SHULIAN_LOADING);
export const setShuLianHasMoreAction = createAction(Actions.SET_SHULIAN_HASMORE);
export const setShuLianPagInfoAction = createAction(Actions.SET_SHULIAN_PAGINFO);
export const resetPageInfo = createAction(Actions.RESET_PAGE_INFO);
export const changeArticleStatus = createAction(Actions.CHANGE_STATUS);
export const changeAllArticleStatus = createAction(Actions.CHANGE_ALL_SATTUS);
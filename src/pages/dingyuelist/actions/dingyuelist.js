import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/dingyuelist';

export const getDingyueListAction = createAction(Actions.FECTH_DINGYUE_LIST);
export const getDingyueDetailAction = createAction(Actions.FECTH_DETAIL);
export const getArticleLst = createAction(Actions.FECTH_ARTICLES);//获取订阅文章列表
 export const getArticleLstByIds = createAction(Actions.FECTH_ARTICLES_BY_IDS);//获取单个文章购买的数联帮列表
// export const getQingBaoLstByIds = createAction(Actions.FECTH_QINGBAO_BY_IDS);
export const setLoadingAction = createAction(Actions.SETLOADING);
export const setHasMoreAction = createAction(Actions.SETHASMORE);
export const setPagInfoAction = createAction(Actions.SETPAGINFO);
export const setOpenState = createAction(Actions.SET_OPEN_STATE);
//情报物
export const setMyQingBaoLoadingAction = createAction(Actions.SET_MYQINGBAO_LOADING);
export const setMyQingBaoHasMoreAction = createAction(Actions.SET_MYQINGBAO_HASMORE);
export const setMyQingBaoPagInfoAction = createAction(Actions.SET_MYQINGBAO_PAGINFO);
export const getMyQingBaoLstByIds = createAction(Actions.FECTH_MYQINGBAO_BY_IDS);
export const getMyQingBaoLst = createAction(Actions.FETCH_MY_QINGBAO);//获取订阅情报列表

export const resetPageInfo = createAction(Actions.RESET_PAGE_INFO);
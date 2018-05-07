import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/qingbaolist';


export const setLoadingAction = createAction(Actions.SETLOADING);
export const setHasMoreAction = createAction(Actions.SETHASMORE);
export const setPagInfoAction = createAction(Actions.SETPAGINFO);
export const getQingBaoLstByIds = createAction(Actions.FECTH_QINGBAO_BY_IDS);
export const getQingBaoLst = createAction(Actions.FETCH);//获取订阅情报列表
export const getArticleLstByIds = createAction(Actions.FECTH_BY_IDS);//获取单个情报购买的情报

export const resetPageInfo = createAction(Actions.RESET_PAGE_INFO);
export const changeStatus = createAction(Actions.CHANGE_STATUS);
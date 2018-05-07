import { createAction } from 'redux-actions';

import { Actions } from '../constants/settings';

export const setData = createAction(Actions.SETDATA);
export const saveSettings = createAction(Actions.SETTINGS);
export const delLogin = createAction(Actions.DEL_LOGIN);//注销登录


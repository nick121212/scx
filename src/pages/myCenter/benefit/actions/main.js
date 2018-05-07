import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/main';

export const changeBenefitTab = createAction(Actions.CHANGEBENEFITINDEX);
export const saveSys = createAction(Actions.SAVESYS);
import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/main';

export const doChangeDingYueTabs = createAction(Actions.CHANGEINDEX);
export const saveSys = createAction(Actions.SAVESYS);
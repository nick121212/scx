import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/main';

export const doChangeUnionIndexAction = createAction(Actions.CHANGEINDEX);
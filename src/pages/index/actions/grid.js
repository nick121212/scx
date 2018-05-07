import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/grid';

export const getExtraDataAction = createAction(Actions.FETCH);
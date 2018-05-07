import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/articlebriefinfo';

export const getArticleBriefInfoAction = createAction(Actions.FETCH);
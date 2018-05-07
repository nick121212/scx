import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/article';

export const getArticlesAction = createAction(Actions.FETCH);
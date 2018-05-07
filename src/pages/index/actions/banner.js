import { createAction, createActions } from 'redux-actions';

import { Actions } from '../constants/banner';

export const getBannersAction = createAction(Actions.FETCH);
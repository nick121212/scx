
import {createAction,createActions} from 'redux-actions';
import {Actions} from '../constants/joinunion';
export const getAllUnion = createAction(Actions.FECTH);
export const getAllShopsInUnion = createAction(Actions.GETSHOPSINUNION);
export const joinUnion = createAction(Actions.JOINUNION);
export const assignmentData = createAction(Actions.ASSIGNMENT);
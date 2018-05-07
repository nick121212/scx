import {createAction,createActions} from "redux-actions";
import {Actions} from "../constants/myunion";
export const getMyUnion = createAction(Actions.FECTH);
export const getShopInUnion = createAction(Actions.GETSHOP);
export const exitUnion = createAction(Actions.EXITUNION);
export const assignmentData = createAction(Actions.ASSIGNMENT);
import {createAction,createActions} from "redux-actions";
import {Actions} from "../constants/otherunion";

export const getOtherUnion = createAction(Actions.FECTH);
export const getOtherUnionShops= createAction(Actions.GETSHOPINFO);
export const joinNewUnion = createAction(Actions.JOINNEWUNION);
export const assignmentData = createAction(Actions.ASSIGNMENT);
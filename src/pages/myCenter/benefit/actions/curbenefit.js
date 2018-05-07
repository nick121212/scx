import {createAction,createActions} from "redux-actions";
import {Actions} from "../constants/curbenefit";
export const setNewBenefit = createAction(Actions.CREATE);
export const saveNewBenefitMsg = createAction(Actions.SAVABENEFITMSG);
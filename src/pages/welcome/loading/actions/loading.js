
import {createAction,createActions} from 'redux-actions';
import {Actions} from '../constants/loading';
export const isLogin = createAction(Actions.ISLOGIN);
export const isRegister = createAction(Actions.ISREGISTER);

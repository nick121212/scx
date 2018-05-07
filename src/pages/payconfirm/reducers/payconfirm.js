import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/payconfirm';

export const reducer = handleActions({
   
    [Actions.SET_DESC]: (state, action) => {
        let obj = Object.assign({}, state, { briefinfo: action.payload.data });
        
        return obj;
    }

}, initalzeState);
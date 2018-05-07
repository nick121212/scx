import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/pay';

export const reducer = handleActions({
    [Actions.PAY]: (state, action) => {

        //  let obj =  Object.assign({}, state, { articles: action.payload.data });
    
        //  return obj;
    },

}, initalzeState);
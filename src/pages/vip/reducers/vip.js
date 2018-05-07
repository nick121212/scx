import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/vip';

export const reducer = handleActions({
    [Actions.SELECT]: (state, action) => {
      
         let obj =  Object.assign({}, state, { selectIndex: action.payload.data });
        
         return obj;
    },
   
}, initalzeState);
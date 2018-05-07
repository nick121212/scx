import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/oncebuy';

export const reducer = handleActions({
    [Actions.SELECT_ONECEBUY]: (state, action) => {
      
         let obj =  Object.assign({}, state, { selectIndex: action.payload.data });
       
         return obj;
    },
    [Actions.SET_BUY_TYPE]:(state,action) =>{
         let obj =  Object.assign({}, state, { mutibuy: action.payload.data });
     
         return obj;
    },
    [Actions.SAVE_SINGLE_PRICE_INFO]:(state,action)=>{
         let obj =  Object.assign({}, state, { singlePriceInfo: action.payload.data });
       
         return obj;
    }    
   
}, initalzeState);
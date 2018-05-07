import { handleActions } from 'redux-actions'
import { Actions, initalzeState } from '../constants/curbenefit'
export const reducer = handleActions({
    [Actions.CREATE]: (state, action) => {
        
        let obj = Object.assign({}, state, {
            isLoaded:true,
             curbenefitMsg: action.payload 
        });
        return obj;
    },
    [Actions.SAVABENEFITMSG]:(state,action) =>{
          let obj = Object.assign({}, state, {
            curbenefitMsg:action.payload.msg,
            isLoaded:true
        });
  
        return obj;

    }

}, initalzeState)
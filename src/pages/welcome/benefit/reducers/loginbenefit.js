import { handleActions } from 'redux-actions'
import { Actions, initalzeState } from '../constants/loginbenefit'
export const reducer = handleActions({
    [Actions.SETBENEFIT]: (state, action) => {
        
        let obj = Object.assign({}, state, { benefitMsg: action.payload });
        return obj;
    }

}, initalzeState)
import { handleActions } from 'redux-actions'
import { Actions, initalzeState } from '../constants/myinfo'
export const reducer = handleActions({
    [Actions.NONE]: (state, action) => {
       
    }

}, initalzeState)


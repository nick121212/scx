import {handleActions} from 'redux-actions'
import {Actions,initalzeState} from '../constants/login'
export const reducer = handleActions({
    [Actions.LOGIN]:(state,action)=>{
        return Object.assign({},state,{})
    }

},initalzeState)
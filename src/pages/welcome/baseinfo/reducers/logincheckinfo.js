import {handleActions} from 'redux-actions'
import {Actions,initalzeState} from '../constants/logincheckinfo'
export const reducer = handleActions({
    [Actions.CHECKINFO]:(state,action)=>{
        return Object.assign({},state,{shopinfo:action.payload})
    }

},initalzeState)
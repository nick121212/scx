import {handleActions} from 'redux-actions'
import {Actions,initalzeState} from '../constants/loading'
export const reducer = handleActions({
    [Actions.ISLOGIN]:(state,action)=>{
        return Object.assign({},state,{})
    },
      [Actions.SHOPINFO]:(state,action)=>{
        return Object.assign({},state,{shopinfo:action.payload})
    }

},initalzeState)
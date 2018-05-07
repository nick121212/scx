import {handleActions} from 'redux-actions'
import {Actions,initalzeState} from '../constants/historyunion'
export const reducer = handleActions({
    [Actions.FECTH]:(state,action)=>{
        let obj= Object.assign({},state,{historyUnions:action.payload});

        return obj;
    }

},initalzeState)
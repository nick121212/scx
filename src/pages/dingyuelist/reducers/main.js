import {handleActions} from 'redux-actions';
import {Actions,initalzeState} from '../constants/main'

export const reducer = handleActions({
    [Actions.CHANGEINDEX]:(state,action) =>{
        return Object.assign({},state,{...action.payload});
    },
     [Actions.SAVESYS]:(state,action) =>{
        let obj = Object.assign({}, state, {
            sliderLeft:action.payload.left,
            sliderOffset:action.payload.offset,

        });
        return obj;

    }
},initalzeState)
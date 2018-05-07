import {handleActions} from 'redux-actions';
import {Actions,initalzeState} from '../constants/main'

export const reducer = handleActions({
    [Actions.CHANGEBENEFITINDEX]:(state,action) =>{
        let obj = Object.assign({},state,{...action.payload});
        return obj;
    },
     [Actions.SAVESYS]:(state,action) =>{
        let obj = Object.assign({}, state, {
            sliderLeft:action.payload.left,
            sliderOffset:action.payload.offset,

        });
        return obj;

    }
},initalzeState)
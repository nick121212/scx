import {handleActions} from 'redux-actions'
import {Actions,initalzeState} from '../constants/joinunion'
export const reducer = handleActions({
    [Actions.FECTH]:(state,action)=>{
        let obj= Object.assign({},state,{navLeftItems:action.payload});
        return obj;
    },
    [Actions.GETSHOPSINUNION]:(state,action) =>{
        let obj = Object.assign({},state,{
            navRightItems:action.payload.data,
        });
        return obj;
    },
    [Actions.JOINUNION]:(state,action)=>{
        let obj = Object.assign({}, state, {
            navRightItems:[],
        });
        
        return obj;
    },
     [Actions.ASSIGNMENT]:(state,action) =>{
        let obj = Object.assign({}, state, {
            SelectIds:action.payload.ids,
            SelectNames:action.payload.names,
            navLeftItems:action.payload.unions

        });
        return obj;

    }
 
},initalzeState)
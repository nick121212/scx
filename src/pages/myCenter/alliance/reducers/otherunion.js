import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/otherunion';
export const reducer = handleActions({
    [Actions.FECTH]: (state, action) => {
        let obj = Object.assign({}, state, { otherunions: action.payload });
        return obj;
    },
    [Actions.GETSHOPINFO]: (state, action) => {
        let obj = Object.assign({}, state, {
            otherunionshops: action.payload.data,
        });
        return obj;
    },
    [Actions.JOINNEWUNION]: (state, action) => {

        let obj = Object.assign({}, state, {
            otherUnionNav:-1,
            otherunionshops:[],
        });
        
        return obj;
    },
    [Actions.ASSIGNMENT]:(state,action) =>{
        let obj = Object.assign({}, state, {
            otherUnionSelectIds:action.payload.ids,
            otherUnionSelectNames:action.payload.names,
            otherunions:action.payload.unions,
            otherunionshops:action.payload.shops

        });
        return obj;

    }

}, initalzeState)
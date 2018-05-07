import { handleActions } from 'redux-actions'
import { Actions, initalzeState } from '../constants/myunion'
export const reducer = handleActions({
    [Actions.FECTH]: (state, action) => {
        let obj = Object.assign({}, state, { myunions: action.payload });
        return obj;
    },
    [Actions.GETSHOP]: (state, action) => {
        let obj = Object.assign({}, state, {
            myunionshops: action.payload.data,
        });
        return obj;
    },
    [Actions.EXITUNION]: (state, action) => {

        state.myunions.splice(state.curDelectNav, 1);
        let obj = Object.assign({}, state, {
            myunionshops:[],
        }
        );
        return obj;
    },
    [Actions.ASSIGNMENT]:(state,action) =>{
        let obj = Object.assign({}, state, {
            myunions:action.payload.unions,
            selectIds:action.payload.ids,   
            myunionshops:action.payload.shops

        });
        return obj;

    }

}, initalzeState)
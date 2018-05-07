import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/settings';

export const reducer = handleActions({
    [Actions.SETTINGS]: (state, action) => {
        if (action.error) {
            return state;
        }

        return Object.assign({}, state, { ...action.payload });
    },
    [Actions.SETDATA]: (state, action) => {
        return Object.assign({}, state, { ...action.payload });
    },
    [Actions.DEL_LOGIN]:(state,action) => {
       return Object.assign({}, state, { ...action.payload });
    }
}, initalzeState);

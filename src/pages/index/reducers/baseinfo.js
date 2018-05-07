import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/baseinfo';

export const reducer = handleActions({
    [Actions.BASEINFO]: (state, action) => {
        return Object.assign({}, state, { baseinfo: action.payload });
    }
}, initalzeState);
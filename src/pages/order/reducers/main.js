import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/main';

export const reducer = handleActions({
    [Actions.CHANGEINDEX]: (state, action) => {
        let obj = Object.assign({}, state, { ...action.payload });

        return obj;
    }
}, initalzeState);

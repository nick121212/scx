import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/chart';

export const reducer = handleActions({
    [Actions.FETCH]: (state, action) => {
        return Object.assign({}, state, { data: action.payload });
    }
}, initalzeState);
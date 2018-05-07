import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/grid';

export const reducer = handleActions({
    [Actions.FETCH]: (state, action) => {
        return Object.assign({}, state, { extradata: action.payload.data });
    }
}, initalzeState);
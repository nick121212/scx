import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/banner';

export const reducer = handleActions({
    [Actions.FETCH]: (state, action) => {
        return Object.assign({}, state, { articles: action.payload });
    }
}, initalzeState);
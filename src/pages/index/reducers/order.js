import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/order';

export const reducer = handleActions({
    [Actions.FETCH]: (state, action) => {
        return Object.assign({}, state, { orders: action.payload });
    }
}, initalzeState);
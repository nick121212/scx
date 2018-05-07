import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/usrbaseinfo';

export const reducer = handleActions({
    [Actions.BASE]: (state, action) => {
        return Object.assign({}, state, { usrinfo: action.payload });
    }

}, initalzeState);

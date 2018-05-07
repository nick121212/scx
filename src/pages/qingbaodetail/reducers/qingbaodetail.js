import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/qingbaodetail';


export const reducer = handleActions({
    [Actions.FETCH]: (state, action) => {
        let obj = Object.assign({}, state, { src: action.payload.data });
        return obj;
    }
}, initalzeState);

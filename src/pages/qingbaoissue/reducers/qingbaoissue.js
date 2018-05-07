import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/qingbaoissue';

import Moment from "moment";

export const reducer = handleActions({
    [Actions.FETCH]: (state, action) => {
        let obj = Object.assign({}, state, { issues: action.payload.data });
        return obj;
    }
}, initalzeState);

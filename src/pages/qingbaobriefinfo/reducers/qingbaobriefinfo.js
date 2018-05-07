import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/qingbaobriefinfo';

import Moment from "moment";

export const reducer = handleActions({
    [Actions.FETCH]: (state, action) => {
        // if (action.error) {
        //     return state;
        // }

        // action.payload.content = action.payload.content.replace(/\\"/ig, '"');
        // action.payload.create_time = Moment(action.payload.create_time || "").format("YYYY-MM-DD");

        // return Object.assign({}, state, { briefinfo: action.payload });
    }
}, initalzeState);

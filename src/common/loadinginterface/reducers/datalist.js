import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/datalist';

export const reducer = handleActions({
    [Actions.FETCH]: (state, action) => {
        if (action.error) {
            return state;
        }
        if (action.payload.refresh) {
            return Object.assign({}, state, { datalist: action.payload.data });
        }

        let { datalist } = state;

        return Object.assign({}, state, { datalist: datalist.concat(action.payload.data) });
    },
    [Actions.SETLOADING]: (state, action) => {
        return Object.assign({}, state, { loading: !!action.payload });
    },
    [Actions.SETPAGINFO]: (state, action) => {
        let { pageSize = state.pageSize, pageNum = state.pageNum } = action.payload;

        return Object.assign({}, state, { pageSize, pageNum });
    },
    [Actions.SETHASMORE]: (state, action) => {
        return Object.assign({}, state, { hasMore: action.payload });
    }
}, initalzeState);
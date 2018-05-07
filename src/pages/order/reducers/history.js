import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/history';

export const reducer = handleActions({
    [Actions.FETCH]: (state, action) => {
        console.log("22222222222222222")
        if (action.error) {
            return state;
        }

        if (action.payload.refresh) {
            return Object.assign({}, state, { orders: action.payload.data });
        }
        let { orders } = state;

        return Object.assign({}, state, { orders: orders.concat(action.payload.data) });
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
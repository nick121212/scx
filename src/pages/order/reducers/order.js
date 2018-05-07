import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/order';

export const reducer = handleActions({
    [Actions.SETLOADING]: (state, action) => {
        return Object.assign({}, state, { loading: !!action.payload });
    },
    [Actions.FETCH]: (state, action) => {
        if (action.error) {
            return state;
        }

        action.payload.data = action.payload.data.map((d) => {
            d.orderCreateDate && (d.orderCreateDate = d.orderCreateDate.substring(0, d.orderCreateDate.length - 2));

            return d;
        });

        if (action.payload.refresh) {
            return Object.assign({}, state, { orders: action.payload.data });
        }
        let { orders } = state;

        return Object.assign({}, state, { orders: orders.concat(action.payload.data) });
    },
    [Actions.CREATE]: (state, action) => {
        let { orders } = state;

        let orderIndex = orders.findIndex((order) => {
            return order.id.toString() === action.payload.productId;
        });

        if (orderIndex >= 0) {
            orders.splice(orderIndex, 1);
        }

        return Object.assign({}, state, { orders });
    }
}, initalzeState);

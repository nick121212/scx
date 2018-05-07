import { handleActions } from 'redux-actions'
import { Actions, initalzeState } from '../constants/historybenefit'
export const reducer = handleActions({
    [Actions.FECTH]: (state, action) => {
        for (var i = 0; i < action.payload.length; i++) {

            var date = new Date(action.payload[i].update_time)
            action.payload[i]["update_time"] = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        }
        let obj = Object.assign({}, state,
            {

                historybenefits: action.payload
            }
        );
        return obj;
    }

}, initalzeState)


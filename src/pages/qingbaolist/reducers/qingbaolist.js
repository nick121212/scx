import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/qingbaolist';

export const reducer = handleActions({
    [Actions.FETCH]: (state, action) => {
       
        if (action.error) {
            return state;
        }
        let lst = [];
        for (let i = 0; i < action.payload.data.length; i++) {
            if (action.payload.data[i].hasIssue == true) {
                lst.push(action.payload.data[i]);
            }
        }

        if (action.payload.refresh) {
            // return Object.assign({}, state, { qingbaolst: action.payload.data, qingbaoIndexPage: action.payload.data.slice(0, 2) });
            let obj = Object.assign({}, state, {
                qingbaolst: lst,

                qingbaoIndexPage: lst.slice(0, 2)
            });
            return obj;
        }

        let { qingbaolst } = state;

        let obj = Object.assign({}, state, {
            qingbaolst: qingbaolst.concat(lst),
            qingbaoIndexPage: qingbaolst.slice(0, 2)
        });
 
        return obj;

    },
    [Actions.RESET_PAGE_INFO]: (state, action) => {
        let obj = Object.assign({}, state, { pageNum: 0, hasMore: true });

        return obj;
    },
    [Actions.SETLOADING]: (state, action) => {
        let obj = Object.assign({}, state, { loading: !!action.payload });
        return obj;
    },
    [Actions.SETPAGINFO]: (state, action) => {
        let { pageSize = state.pageSize, pageNum = state.pageNum } = action.payload;

        return Object.assign({}, state, { pageSize, pageNum });
    },
    [Actions.SETHASMORE]: (state, action) => {
        let obj = Object.assign({}, state, { hasMore: action.payload });
      
        return obj;
    },
    [Actions.FECTH_QINGBAO_BY_IDS]: (state, action) => {
        
        let obj = Object.assign({}, state, { qingbaolst: action.payload.data });
        return obj;
    },
    [Actions.CHANGE_STATUS]:(state,action) =>{
        let targetId =action.payload.data;
       
        let lst = state.qingbaolst;
      
        for(let i =0; i <lst.length;i++){
            if(targetId == lst[i].id){
                lst[i].subscribe = true;
            }
        }

        let lst2 = state.qingbaoIndexPage;
         for(let i =0; i <lst2.length;i++){
            if(targetId == lst2[i].id){
                lst2[i].subscribe = true;
            }
        }

        let obj =Object.assign({},state,{
            qingbaolst:lst,
            qingbaoIndexPage:lst2
        });
        
        return obj;

    }
}, initalzeState);
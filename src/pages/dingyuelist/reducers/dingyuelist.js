import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/dingyuelist';

export const reducer = handleActions({
    [Actions.FECTH_DINGYUE_LIST]: (state, action) => {
        let obj = Object.assign({}, state, {
            res: action.payload.data
        });
        return obj;
    },
    [Actions.FECTH_DETAIL]: (state, action) => {
        
    },
    [Actions.SET_OPEN_STATE]: (state, action) => {
        let obj = Object.assign({}, state, { myqingbaolst: action.payload.data });
       
        return obj;
    },
    [Actions.RESET_PAGE_INFO]: (state, action) => {
        let obj = Object.assign({}, state, { qingbaopageNum: 0,qingbaohasMore:true});
       
        return obj;
    }
    ,
    [Actions.FECTH_ARTICLES_BY_IDS]: (state, action) => {
        //每次都是获取全部通过单个购买的文章列表
        let obj = Object.assign({}, state, { articles: action.payload.data });
        return obj;
    },
    //会员或者文集购买的列表，需要分页显示
    [Actions.FECTH_ARTICLES]: (state, action) => {
        if (action.error) {
            return state;
        }

        if (action.payload.refresh) {
            return Object.assign({}, state, { articles: action.payload.data });
        }
        let { articles } = state;

        return Object.assign({}, state, { articles: articles.concat(action.payload.data) });
    },
    [Actions.SETLOADING]: (state, action) => {
        let obj = Object.assign({}, state, { loading: !!action.payload });
        return obj;
    },
    [Actions.SETPAGINFO]: (state, action) => {
        let { pageSize = state.pageSize, pageNumber = state.pageNumber } = action.payload;

        return Object.assign({}, state, { pageSize, pageNumber });
    },
    [Actions.SETHASMORE]: (state, action) => {
        let obj = Object.assign({}, state, { hasMore: action.payload });
        return obj;
    },

    //情报物
    [Actions.FETCH_MY_QINGBAO]: (state, action) => {
        
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
                myqingbaolst: lst,
            });
            return obj;
        }

        let { myqingbaolst } = state;

        let obj = Object.assign({}, state, {
            myqingbaolst: myqingbaolst.concat(lst),
        });
     
        return obj;
       

    },
    [Actions.SET_MYQINGBAO_LOADING]: (state, action) => {
        let obj = Object.assign({}, state, { qingbaoloading: !!action.payload });
        return obj;
    },
    [Actions.SET_MYQINGBAO_PAGINFO]: (state, action) => {
        let { qingbaopageSize = state.qingbaopageSize, qingbaopageNum = state.qingbaopageNum } = action.payload;

        return Object.assign({}, state, { qingbaopageSize, qingbaopageNum });
    },
    [Actions.SET_MYQINGBAO_HASMORE]: (state, action) => {
        return Object.assign({}, state, { qingbaohasMore: action.payload });
    },
    [Actions.FECTH_MYQINGBAO_BY_IDS]: (state, action) => {
        //暂时注释掉todo
         let lst = [];
        for (let i = 0; i < action.payload.data.length; i++) {
            if (action.payload.data[i].hasIssue == true) {
                lst.push(action.payload.data[i]);
            }
        } 
        let obj = Object.assign({}, state, { myqingbaolst: lst });
        //    let obj = Object.assign({}, state, { myqingbaolst: action.payload.data });
       
        return obj;
    }


}, initalzeState);
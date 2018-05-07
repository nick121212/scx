import { handleActions } from 'redux-actions';
import { Actions, initalzeState } from '../constants/article';

export const reducer = handleActions({
    [Actions.FETCH]: (state, action) => {
        if (action.error) {
            return state;
        }
        if (action.payload.refresh) {
            let obj = Object.assign({}, state, { articles: action.payload.data,articleLstIndexPage:action.payload.data.slice(0,2) });
      
            return obj;
        }

        let { articles } = state;

        return Object.assign({}, state, { articles: articles.concat(action.payload.data) });
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
    },
     [Actions.CHANGE_STATUS]:(state,action) =>{
         let targetId =action.payload.data;
      
        let lst = state.articleLstIndexPage;

        for(let i =0; i <lst.length;i++){
            if(targetId == lst[i].id){
                lst[i].show_status = 0;
            }
        }
        let obj =Object.assign({},state,{
            articleLstIndexPage:lst
        });
        
        return obj;
    },
     [Actions.CHANGE_ALL_SATTUS]:(state,action) =>{
       
        let lst = state.articleLstIndexPage;
    
        for(let i =0; i <lst.length;i++){
                lst[i].show_status = 0;
        }
        let obj =Object.assign({},state,{
            articleLstIndexPage:lst
        });
         
        return obj;
    }
}, initalzeState);
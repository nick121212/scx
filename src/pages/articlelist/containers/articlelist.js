import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import {changeAllArticleStatus,changeArticleStatus, getShuLianListAction, setShuLianLoadingAction, resetPageInfo,setShuLianHasMoreAction, setShuLianPagInfoAction } from '../actions/articlelist';
import { reKey } from '../constants/articlelist';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.articlelist[reKey],

    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取文章列表
    doGetActicleList: async ({ pageSize, pageNum }, refresh = true) => {
        dispatch(setShuLianLoadingAction(true));
        if (refresh) {
            dispatch(setShuLianPagInfoAction({
                pageSize: pageSize,
                pageNum: 1
            }));
        }
        await dispatch(getShuLianListAction(proxy.execute("/deploy/articleList", {
            params: {
                pageSize: pageSize,
                pageNum: refresh ? 1 : pageNum
            }
        }).then((data) => {
          
            // 没有数据了
            if (!data.data.data || !data.data.data.length || data.data.data.length < pageSize) {
                dispatch(setShuLianHasMoreAction(false));
            } else {
                dispatch(setShuLianPagInfoAction({
                    pageSize: pageSize,
                    pageNum: pageNum + 1
                }));
            }
            return { data: data.data.data, refresh };
        })));
        dispatch(setShuLianLoadingAction(false));
    },
    doResetPage:async() =>{
        dispatch(resetPageInfo({ 
            data:0
         }
        ));
    },
     doChangeArticleStatus:async(id) =>{
        dispatch(changeArticleStatus({ 
            data:id
         }
        ));
    },
    doChangeAllArticleStatus:async() =>{
        dispatch(changeAllArticleStatus({ 
            data:0
         }
        ));
    },
});

export const container = connect(mapStateToProps, mapDispatchToProps);
import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import {changeIndexAllArticleStatus,changeIndexArticleStatus, getArticlesAction, setLoadingAction, setHasMoreAction, setPagInfoAction } from '../actions/article';
import { reKey } from '../constants/article';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.home[reKey],
        usrinfo: state.app.usrbaseinfo,
        usrdata:state.app.usrbaseinfo.usrbaseinfo.usrinfo,

    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取文章列表
    doGetActicleData: async ({ pageSize, pageNum }, refresh = true) => {
        dispatch(setLoadingAction(true));
        if (refresh) {
            dispatch(setPagInfoAction({
                pageSize: pageSize,
                pageNum: 1
            }));
        }
        await dispatch(getArticlesAction(proxy.execute("/deploy/articleList", {
            params: {
                pageSize: pageSize,
                pageNum: refresh ? 1 : pageNum + 1
            }
        }).then((data) => {
            // 没有数据了
            if (!data.data.data || !data.data.data.length || data.data.data.length < pageSize) {
                dispatch(setHasMoreAction(false));
            } else {
                dispatch(setPagInfoAction({
                    pageSize: pageSize,
                    pageNum: pageNum + 1
                }));
            }
            return { data: data.data.data, refresh };
        })));
        dispatch(setLoadingAction(false));
    },
     doChangeIndexArticleStatus:async(id) =>{
        dispatch(changeIndexArticleStatus({ 
            data:id
         }
        ));
    },
    doChangeIndexAllArticleStatus:async() =>{
        dispatch(changeIndexAllArticleStatus({ 
            data:0
         }
        ));
    },
});

export const container = connect(mapStateToProps, mapDispatchToProps);
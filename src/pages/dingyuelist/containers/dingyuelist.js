import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getDingyueListAction, getDingyueDetailAction, getArticleLst, getArticleLstByIds, 
    setLoadingAction, setHasMoreAction, setPagInfoAction,setOpenState,setMyQingBaoLoadingAction,setMyQingBaoPagInfoAction,
    getMyQingBaoLst,setMyQingBaoHasMoreAction,getMyQingBaoLstByIds,resetPageInfo
 } from '../actions/dingyuelist';

import { reKey } from '../constants/dingyuelist';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.dingyuelist[reKey],
           qingbaowu:state.app.qingbaolist,
           sysinfo:state.app.home.baseinfo.baseinfo,
             issues:state.app.qingbaoissue,
    };
};

export const mapDispatchToProps = (dispatch) => ({
    doGetDingyueList: async () => {
        await dispatch(getDingyueListAction(proxy.execute("/deploy/userService", {
            params: {

            }
        }).then((data) => {
            let _data = data.data.data;
            return { data: _data };
        })));
    },

    doSetOpenState:async(lst) =>{
        dispatch(setOpenState({ 
            data:lst
         }
        ));
    },
        doResetPage:async() =>{
        dispatch(resetPageInfo({ 
            data:0
         }
        ));
    },
    //
    doGetActicleList: async ({ pageSize, pageNumber }, refresh = true) => {
        dispatch(setLoadingAction(true));

        if (refresh) {
            await dispatch(setPagInfoAction({
                pageSize: pageSize,
                pageNumber: 1
            }));
        }
        await dispatch(getArticleLst(proxy.execute("/deploy/articleList", {
            params: {
                pageSize,
                pageNum: refresh ? 1 : pageNumber

            }
        }).then((data) => {
            if (!data.data.data || data.data.data.length == 0) {
                dispatch(setHasMoreAction(false));
            } else {
                dispatch(setPagInfoAction({
                    pageSize: pageSize,
                    pageNumber: pageNumber +1
                }));
            }

            return { data: data.data.data, refresh };
        })));
        dispatch(setLoadingAction(false));
        
    },
    // 
    doGetActicleListByIds: async (ids) => {
        await dispatch(getArticleLstByIds(proxy.execute("/deploy/articleDetails", {
            params: {
                id: ids
            }
        }).then((data) => {
            return { data: data.data.data };

        })));
    },

    // 获取情报物列表

    doGetMyQingBaoList: async ({ qingbaopageSize, qingbaopageNum }, refresh = true) => {
        dispatch(setMyQingBaoLoadingAction(true));
        if (refresh) {
            dispatch(setMyQingBaoPagInfoAction({
                qingbaopageSize: qingbaopageSize,
                qingbaopageNum: 0
            }));
        }
        await dispatch(getMyQingBaoLst(proxy.execute("/deploy/getPropertyList", {
            params: {
                page: refresh ? 0 : qingbaopageNum,
                size: qingbaopageSize

            }
        }).then((res) => {
            // 没有数据了

                if (!res.data.data || res.data.data.content.length == 0 || res.data.data.content.length < qingbaopageSize) {
                dispatch(setMyQingBaoHasMoreAction(false));
            } else {
                dispatch(setMyQingBaoPagInfoAction({
                    qingbaopageSize: qingbaopageSize,
                    qingbaopageNum: qingbaopageNum + 1
                }));
            }
            return { data: res.data.data.content, refresh };
          
        })));
        dispatch(setMyQingBaoLoadingAction(false));
    },
     doGetMyQingBaoLstByIds: async (ids) => {
        await dispatch(getMyQingBaoLstByIds(proxy.execute("/deploy/subscribeProperty", {
            params: {
                journalIds: ids
            }
        }).then((data) => {
            return { data: data.data.data };

        })));
    },

   
    

});

export const container = connect(mapStateToProps, mapDispatchToProps);

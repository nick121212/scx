import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getQingBaoLst, setLoadingAction, setHasMoreAction,resetPageInfo, setPagInfoAction ,getQingBaoLstByIds,changeStatus} from '../actions/qingbaolist';
import { reKey } from '../constants/qingbaolist';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.qingbaolist[reKey],
         usrdata: state.app.usrbaseinfo.usrbaseinfo.usrinfo,
    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取情报物列表

    doGetQingBaoList: async ({ pageSize, pageNum }, shopid,refresh = true) => {
        dispatch(setLoadingAction(true));
        if (refresh) {
            dispatch(setPagInfoAction({
                pageSize: pageSize,
                pageNum: 0
               
            }));
        }
      
        await dispatch(getQingBaoLst(proxy.execute("/deploy/getPropertyList", {
            params: {
                page: refresh ? 0 : pageNum,
                size: pageSize,
                shopId:shopid

            }
        }).then((data) => {
            // 没有数据了
            if (!data.data.data || data.data.data.content.length == 0 || data.data.data.content.length < pageSize) {
            
                dispatch(setHasMoreAction(false));
            } else {
                dispatch(setPagInfoAction({
                    pageSize: pageSize,
                    pageNum: pageNum + 1
                }));
            }
            return { data: data.data.data.content, refresh };
        })));
        dispatch(setLoadingAction(false));
    },
     doGetQingBaoLstByIds: async (ids) => {
        await dispatch(getQingBaoLstByIds(proxy.execute("/deploy/subscribeProperty", {
            params: {
                journalIds: ids
            }
        }).then((data) => {
            return { data: data.data.data };

        })));
    },
    //获取首页展示的两篇情报物列表
     doGetIndexQingBaoList: async ({ pageSize, pageNum }, shopid,refresh = true) => {
        dispatch(setLoadingAction(true));
        await dispatch(getQingBaoLst(proxy.execute("/deploy/getPropertyList", {
            params: {
                page: 0,
                size: 10,
                shopId:shopid

            }
        }).then((data) => {
            // 没有数据了
            // if (!data.data.data || data.data.data.content.length == 0 || data.data.data.content.length < pageSize) {
            //     dispatch(setHasMoreAction(false));
            // } 
            return { data: data.data.data.content, refresh };
        })));
        dispatch(setLoadingAction(false));
    },
      doResetPage:async() =>{
        dispatch(resetPageInfo({ 
            data:0
         }
        ));
    },

    doChangeStatus:async(id) =>{
       dispatch(changeStatus({
           data:id
       }));
    }
    

});

export const container = connect(mapStateToProps, mapDispatchToProps);
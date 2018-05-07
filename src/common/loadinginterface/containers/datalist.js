import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getDatalistAction, setLoadingAction, setHasMoreAction, setPagInfoAction } from '../actions/datalist';
 import { reKey } from '../constants/articlelist';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.datalist[reKey],

    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取文章列表
    doDataList: async ({ pageSize, pageNum }, reqUrl,refresh = true) => {
        dispatch(setLoadingAction(true));
        if (refresh) {
            dispatch(setPagInfoAction({
                pageSize: pageSize,
                pageNum: 1
            }));
        }
        await dispatch(getDatalistAction(proxy.execute(reqUrl, {
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
    }
});

export const container = connect(mapStateToProps, mapDispatchToProps);
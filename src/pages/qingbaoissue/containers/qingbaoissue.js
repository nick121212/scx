import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getQingBaoIssues } from '../actions/qingbaoissue';
import { reKey } from '../constants/qingbaoissue';

// const app = getApp(); //  eslint-disable-line no-undef
export const mapStateToProps = (state, props) => {

    return {
        ...state.app.qingbaoissue[reKey],
      
    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取情报简介，接口待确认
     doGetQingBaoIssues: async (id) => {
        await dispatch(getQingBaoIssues(proxy.execute("/deploy/showIssue", {
            params: {
                journalId: id
            }
        }).then((data) => {
        
            if (data.data.data.length) {
                return {data : data.data.data};
            }
            return {};
        })));
    }
});

export const container = connect(mapStateToProps, mapDispatchToProps);
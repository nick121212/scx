import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getQingBaoDetail } from '../actions/qingbaodetail';
import { reKey } from '../constants/qingbaodetail';

export const mapStateToProps = (state, props) => {
    
    return {
        ...state.app.qingbaodetail[reKey],
        issues:state.app.qingbaoissue,
         usrdata:state.app.usrbaseinfo.usrbaseinfo.usrinfo,
      
    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取情报详情，接口待确认
    doGetQingBaoDetail: async (id,styleid,issueid) => {
        await dispatch(getQingBaoDetail(proxy.execute("/deploy/showIssue", {
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
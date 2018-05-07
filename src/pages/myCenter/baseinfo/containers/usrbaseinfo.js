import {connect} from '../../../../libs/weapp-redux';
import {proxy} from '../../../modelproxy/index';
import {getBaseInfoAction} from '../actions/usrbaseinfo';
import { reKey } from '../constants/usrbaseinfo';

export const mapStateToProps = (state,props) => {
    return {
        ...state.app.usrbaseinfo[reKey]
    };
};

export const mapDispatchToProps =(dispatch) =>({
    doGetUsrBaseInfoData:async()=>{
        await dispatch(getBaseInfoAction(proxy.execute("/deploy/shopInfo", {
            params: {
            }
        }).then((data) => {
            if (data !== undefined && data.data.data.length) {
                return data.data.data[0];
            }
            return {};
        })));
    }
})
export const container = connect(mapStateToProps,mapDispatchToProps);

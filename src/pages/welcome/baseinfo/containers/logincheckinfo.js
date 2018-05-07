import {connect} from '../../../../libs/weapp-redux';
import {proxy} from '../../../modelproxy/index';
import {getShopInfo} from '../actions/logincheckinfo';
import { reKey } from '../constants/logincheckinfo';

export const mapStateToProps = (state,props) => {
    return {
        ...state.app.checkinfo[reKey]
    };
};

export const mapDispatchToProps =(dispatch) =>({
    doGetShopInfo:async()=>{
        await dispatch(getShopInfo(proxy.execute("/deploy/shopInfo", {
            params: {
            }
        }).then((data) => {
            if (data.data.data.length) {
                return data.data.data[0];
            }
            return {};
        })));

    }
})
export const container = connect(mapStateToProps,mapDispatchToProps);

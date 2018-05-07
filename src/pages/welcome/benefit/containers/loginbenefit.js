import { connect } from '../../../../libs/weapp-redux';
import { proxy } from '../../../modelproxy/index';
import { createBenefit } from '../actions/loginbenefit';
import { reKey } from '../constants/loginbenefit';

export const mapStateToProps = (state, props) => {
    return {

        ...state.app.loginbenefit[reKey],
        usrdata: state.app.checkinfo.logincheckinfo.shopinfo,
    };
};

export const mapDispatchToProps = (dispatch) => ({
    //设置优惠信息
    doCreateBenefit: async (msg) => {
        await dispatch(createBenefit(proxy.execute("/deploy/updateBenefit", {
            params: {
                benefit_message: msg

            }
        }).then((data) => {
            if (data.data.code == 200) {
                return msg;
            }
            return {};
        })
        ));
    },

})
export const container = connect(mapStateToProps, mapDispatchToProps);

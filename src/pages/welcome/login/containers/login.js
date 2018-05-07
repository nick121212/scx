import { connect } from '../../../../libs/weapp-redux';
import { proxy } from '../../../modelproxy/index';
import { login } from '../actions/login';
import { reKey } from '../constants/login';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.login[reKey]
    };
};

export const mapDispatchToProps = (dispatch) => ({
    doLogin: async (phoneNo, codekey) => {
         const app = getApp();
        await dispatch(login(proxy.execute("/deploy/register", {
            params: {
                phone_number: phoneNo,
                code_key: codekey,
                version:app.globalData.version

            }
        }).then((res) => {
                wx.redirectTo({
                    url: '/pages/welcome/baseinfo/index',
                })

            return {};
        })));

    }
})
export const container = connect(mapStateToProps, mapDispatchToProps);

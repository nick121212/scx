import { connect } from '../../../../libs/weapp-redux';
import { proxy } from '../../../modelproxy/index';
import { isLogin } from '../actions/loading';
import { reKey } from '../constants/loading';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.loading[reKey]
    };
};

export const mapDispatchToProps = (dispatch) => ({
    doIsLogin: async (doGetUsrBaseInfoData) => {
        const app = getApp();

        await dispatch(isLogin(app.wxPromisify(wx.login)({}).then((loginRes) => {
      
            proxy.execute("/deploy/isLogin", {
                params: {
                    code: loginRes.code,
                     version:app.globalData.version
                }
            }).then(() => {
                return proxy.execute("/deploy/isRegister", {
                    params: {
                        version:app.globalData.version
                    }
                });

            }).then(() => {
                dispatch(doGetUsrBaseInfoData());
                wx.navigateBack({
                    delta: 1, // 回退前 delta(默认为1) 页面
                });
            }).catch((error) => {
                wx.redirectTo({
                    url: '/pages/welcome/login/index',
                    success: function () {

                    }
                });
            });
        })));
    },
    IsLogin: async () => {
        const app = getApp();
        await dispatch(isLogin(app.wxPromisify(wx.login)({}).then((loginRes) => {
            proxy.execute("/deploy/isLogin", {
                params: {
                    code: loginRes.code,
                      version:app.globalData.version
                }
            });
        })));
    },
});
export const container = connect(mapStateToProps, mapDispatchToProps);

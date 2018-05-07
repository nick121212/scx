import { connect } from '../../../../libs/weapp-redux';
import { saveSettings, setData ,delLogin} from '../actions/settings';
import { reKey } from '../constants/settings';
import { proxy } from '../../../modelproxy/index';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.settings[reKey]
    };
};

export const mapDispatchToProps = (dispatch) => ({
    setSettingsData: (data) => {
        dispatch(setData(data));
    },
    saveSettings: async ({ enableMessage }) => {
        wx.showLoading({});
        await dispatch(saveSettings(proxy.execute("/deploy/updateIsSend", {
            params: {
                isSend: enableMessage ? 1 : 0
            }
        }).then((data) => {
            return data;
        }).catch(console.error)));
        wx.hideLoading();
    },
      doDelLogin: async (doGetUsrBaseInfoData) => {
        await dispatch(delLogin(proxy.execute("/deploy/delLogin", {
           
        }).then((data) => {
            try {
                  dispatch(doGetUsrBaseInfoData());
            } catch (error) {
                console.log("注销错误",error)
            }
            
            wx.switchTab({
                url: '/pages/index/index',
              
            })
            console.log("注销成功")
        }).catch(console.error)));
       
    }
});

export const container = connect(mapStateToProps, mapDispatchToProps);

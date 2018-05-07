import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getBaseInfoAction } from '../actions/baseinfo';
import { reKey } from '../constants/baseinfo';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.home[reKey]
    };
};

export const mapDispatchToProps = (dispatch) => ({
    doGetBaseInfoData: async () => {
        const app = getApp(); //  eslint-disable-line no-undef

        await dispatch(getBaseInfoAction(app.wxPromisify(wx.getSystemInfo)().then((res) => {
            return res;
        })));
    }
});

export const container = connect(mapStateToProps, mapDispatchToProps);
import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getBannersAction } from '../actions/banner';
import { reKey } from '../constants/banner';

// const app = getApp(); //  eslint-disable-line no-undef
export const mapStateToProps = (state, props) => {
    return {
        banner: state.app.home[reKey]
    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取文章列表
    doGetBannerData: async() => {
        await dispatch(getBannersAction());
    }
});

export const container = connect(mapStateToProps, mapDispatchToProps);
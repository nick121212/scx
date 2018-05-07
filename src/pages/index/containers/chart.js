import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getArticlesAction } from '../actions/chart';
import { reKey } from '../constants/chart';

// const app = getApp(); //  eslint-disable-line no-undef
export const mapStateToProps = (state, props) => {
    return {
        chart: state.app.home[reKey]
    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取首页的报表数据
    doGetChartData: (state) => {
        dispatch(getChartDataAction());
    }
});

export const container = connect(mapStateToProps, mapDispatchToProps);
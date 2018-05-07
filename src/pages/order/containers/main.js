import { connect } from '../../../libs/weapp-redux';
import { doChangeIndexAction } from '../actions/main';
import { reKey } from '../constants/main';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.orders[reKey],
        ...state.app.usrbaseinfo.usrbaseinfo
    };
};
export const mapDispatchToProps = (dispatch) => ({
    doChangeIndex: async ({ sliderOffset, activeIndex }) => {
        await dispatch(doChangeIndexAction({ sliderOffset, activeIndex }));
    }
});

export const container = connect(mapStateToProps, mapDispatchToProps);

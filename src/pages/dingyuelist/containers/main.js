import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { doChangeDingYueTabs,saveSys } from '../actions/main'
import { reKey } from '../constants/main';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.dingyuelist[reKey]
    };
};

export const mapDispatchToProps = (dispatch) => ({
    doChangeDingYueIndex: async ({ sliderOffset, activeIndex }) => {
        await dispatch(doChangeDingYueTabs({ sliderOffset, activeIndex }));
    },
    doSaveSys(left, offset) {
        dispatch(saveSys({ left: left, offset: offset }
        ));
    },
});

export const container = connect(mapStateToProps, mapDispatchToProps);
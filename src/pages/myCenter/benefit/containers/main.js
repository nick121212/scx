import {connect } from '../../../../libs/weapp-redux';
import {proxy} from '../../../modelproxy/index';
import {changeBenefitTab,saveSys} from '../actions/main'
import {reKey} from '../constants/main';

export const mapStateToProps = (state,props) =>{
    return {
        ...state.app.benefitinfo[reKey]
    };
};

export const mapDispatchToProps = (dispatch) =>({
    doChangeBenfitIndex:async ({sliderOffset,activeIndex}) => {
        await dispatch(changeBenefitTab({sliderOffset,activeIndex}));
    },
       doSaveSys(left,offset) {
        dispatch(saveSys( { left: left, offset: offset}
         ));
    },
});

export const container = connect(mapStateToProps,mapDispatchToProps);
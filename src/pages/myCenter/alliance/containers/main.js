import {connect } from '../../../../libs/weapp-redux';
import {proxy} from '../../../modelproxy/index';
import {doChangeUnionIndexAction} from '../actions/main'
import {reKey} from '../constants/main';

export const mapStateToProps = (state,props) =>{
    return {
        ...state.app.union[reKey]
    };
};

export const mapDispatchToProps = (dispatch) =>({
    doChangeUnionIndex:async ({sliderOffset,activeIndex}) => {
        await dispatch(doChangeUnionIndexAction({sliderOffset,activeIndex}));
    }
});

export const container = connect(mapStateToProps,mapDispatchToProps);
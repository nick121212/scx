import { connect } from '../../../../libs/weapp-redux';
import { proxy } from '../../../modelproxy/index';

import { reKey } from '../constants/myinfo';

export const matStateToProps = (state,props) =>{

}
// const app = getApp(); //  eslint-disable-line no-undef
export const mapStateToProps = (state, props) => {
    return {
         ...state.app.myinfo[reKey],
        // usrdata: state.app.usrbaseinfo.usrbaseinfo.usrinfo,
        ...state.app.usrbaseinfo.usrbaseinfo,
        sysinfo:state.app.home.baseinfo.baseinfo
    };
};

export const mapDispatchToProps = (dispatch) => ({
   //更改优惠信息
});

export const container = connect(mapStateToProps, mapDispatchToProps);
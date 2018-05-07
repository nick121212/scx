import { connect } from '../../../../libs/weapp-redux';
import { proxy } from '../../../modelproxy/index';
import { setNewBenefit ,saveNewBenefitMsg} from '../actions/curbenefit';
import { reKey } from '../constants/curbenefit';

export const matStateToProps = (state,props) =>{

}
// const app = getApp(); //  eslint-disable-line no-undef
export const mapStateToProps = (state, props) => {
    return {
         ...state.app.benefitinfo[reKey],
        thisusrInfo: state.app.usrbaseinfo.usrbaseinfo.usrinfo,
        sysinfo:state.app.home.baseinfo.baseinfo
    };
};

export const mapDispatchToProps = (dispatch) => ({
   //更改优惠信息

    doSetNewBenefit: async (msg) => {

        await dispatch(setNewBenefit(proxy.execute("/deploy/updateBenefit", {
            params: {
                benefit_message: msg

            }

        }).then((data) => {
            if (data.data.code == 200) {
                 wx.showModal({
                 title: '温馨提示', 
                 content: '优惠信息更新成功',
                })
                return msg;
            }
            return {};

        })
        ));

    },
     doSaveNewBenefitMsg(msg) {
        dispatch(saveNewBenefitMsg( {msg:msg}
         ));
    },
});

export const container = connect(mapStateToProps, mapDispatchToProps);
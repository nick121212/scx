import { connect } from '../../../../libs/weapp-redux';
import { proxy } from '../../../modelproxy/index';
import { getHistoryBenefit } from '../actions/historybenefit';
import { reKey } from '../constants/historybenefit';

export const matStateToProps = (state,props) =>{

}
// const app = getApp(); //  eslint-disable-line no-undef
export const mapStateToProps = (state, props) => {
    return {
      ...state.app.benefitinfo[reKey],
    };
};

export const mapDispatchToProps = (dispatch) => ({
   //获取历史优惠信息
     // 
    doGetHistoryBenefit: async () => {

        await dispatch(getHistoryBenefit(proxy.execute("/deploy/historyBenefit", {
            params: {
            
            }

        }).then((res) => {
            if (res.data.code == 200) {
                return res.data.data;
            }
            return {};

        })
        ));

    },
});

export const container = connect(mapStateToProps, mapDispatchToProps);
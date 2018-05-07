import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { selectVip } from '../actions/vip';
import { reKey } from '../constants/vip';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.vip[reKey],

    };
};

export const mapDispatchToProps = (dispatch) => ({
   
    //   doSelectVip: async (args) => {
   
    //     await dispatch(selectVip(proxy.execute("/deploy/confirmOrder", {
    //         params{

    //         }
        
    //     }).then((data) => {
       
    //         return { data: data.data.data };
    //     })));
    // }
});

export const container = connect(mapStateToProps, mapDispatchToProps);
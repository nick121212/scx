import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getExtraDataAction } from '../actions/grid';
import { reKey } from '../constants/grid';

// const app = getApp(); //  eslint-disable-line no-undef
export const mapStateToProps = (state, props) => {
    return {
        grid: state.app.home[reKey]
    };
};

export const mapDispatchToProps = (dispatch) => ({

      //
    doGetExtraData: async (marketId) => {
        await dispatch(getExtraDataAction(proxy.execute("/deploy/getAlldata", {
            params: {
                marketId: marketId
    
            }
        }).then((data) => {

            // if (data.data.data.length) {
            //     return data.data.data[0];
            // }
            return {data:data.data.data};
        })));
    }
});

export const container = connect(mapStateToProps, mapDispatchToProps);
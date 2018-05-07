import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import {setDesc } from '../actions/payconfirm';

import { reKey } from '../constants/payconfirm';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.payconfirm[reKey],
        qingbaolst: state.app.qingbaolist.qingbaolist.qingbaolst,
        articles: state.app.articlelist.articlelist.articles
    };
};

export const mapDispatchToProps = (dispatch) => ({

    doSetOpenDesc:async(desc) =>{
        dispatch(setDesc({ 
            data:desc
         }
        ));
    }
   

});

export const container = connect(mapStateToProps, mapDispatchToProps);

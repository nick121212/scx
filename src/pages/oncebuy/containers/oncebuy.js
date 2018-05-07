import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { selectBuyOnce,selectBuyType,saveSinglePiceInfo } from '../actions/oncebuy';
import { reKey } from '../constants/oncebuy';

export const mapStateToProps = (state, props) => {
   
    return {
        
        ...state.app.oncebuy[reKey],
        qingbaolst: state.app.qingbaolist.qingbaolist.qingbaolst,
        articles: state.app.articlelist.articlelist.articles

    };
};

export const mapDispatchToProps = (dispatch) => ({


     doSelectBuyType:async(showmore) =>{
        dispatch(selectBuyType({ 
            data:showmore
         }
        ));
    },
    doSaveSinglePiceInfo:async(info)=>{
        dispatch(saveSinglePiceInfo({
            data:info
        }))
    }


    
});

export const container = connect(mapStateToProps, mapDispatchToProps);
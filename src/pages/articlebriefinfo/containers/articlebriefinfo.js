import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getArticleBriefInfoAction } from '../actions/articlebriefinfo';
import { reKey } from '../constants/articlebriefinfo';

// const app = getApp(); //  eslint-disable-line no-undef
export const mapStateToProps = (state, props) => {

    return {
        ...state.app.articlebriefinfo[reKey],
        articles:state.app.home.article.articles
        
    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取文章列表
    doGetActicleBriefInfoData: async (id) => {
        await dispatch(getArticleBriefInfoAction(proxy.execute("/deploy/articleDetails", {
            params: {
                id: id
    
            }
        }).then((data) => {
            if (data.data.data.length) {
                return data.data.data[0];
            }
            return {};
        })));
    }
});

export const container = connect(mapStateToProps, mapDispatchToProps);
import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { getArticlesAction } from '../actions/article';
import { reKey } from '../constants/article';

// const app = getApp(); //  eslint-disable-line no-undef
export const mapStateToProps = (state, props) => {
    return {
        ...state.app.article[reKey]
    };
};

export const mapDispatchToProps = (dispatch) => ({
    // 获取文章列表
    doGetActicleData: async (id) => {
        await dispatch(getArticlesAction(proxy.execute("/deploy/articleDetails", {
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
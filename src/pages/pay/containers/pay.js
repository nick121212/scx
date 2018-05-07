import { connect } from '../../../libs/weapp-redux';
import { proxy } from '../../modelproxy/index';
import { reqPay } from '../actions/pay';
import { reKey } from '../constants/pay';

export const mapStateToProps = (state, props) => {
    return {
        ...state.app.pay[reKey],

    };
};
// 公共充值接口
//service_type:
//0:单个文章类型，充值后直接跳转到文章详情
//1：单个情报物类型，充值后直接跳转到对应情报物页面详情（参数id还是styleid待定）
//2，文章合集类型，重置后直接跳转到我的订阅列表
//3，情报物集合类型，充值成功后直接跳转到“我的订阅页面"
//4:会员类型，也跳转到我的订阅

//特别说明
//情报物id ---->是一个合刊概念，情报物购买买的是合刊，查看详情的时候，需要传给页面
//id（合刊id) styleid,还有期刊号
export const mapDispatchToProps = (dispatch) => ({

    doReqPay: async (args) => {

        //
        await dispatch(reqPay(proxy.execute("/deploy/confirmOrder", {
            params: {
                total_fee: args.total_free,
                service_type: args.service_type,
                service_date: args.service_date,
                service_id: args.service_id
            }

        }).then((data) => {
            let params = JSON.stringify(args);
            wx.redirectTo({
                url: '/pages/payconfirm/index?args='+params,

            })
            // //单个文章类型，重置后直接跳转
            // if (args.service_type == 0) {
            //     wx.navigateTo({
            //         // url: '/pages/article/index?id=' + args.service_id + '&frombuy=' + '1',
            //           url: '/pages/confirm/index?type=0&id=' + args.service_id + '&frombuy=' + '1',
            //     })

            // }//情报物
            // else if (args.service_type == 1) {
            //     wx.navigateTo({
            //         // url: '/pages/qingbaodetail/index?id=' + args.service_id + '&styleid=' + args.styleid + '&url=' + args.url + '&frombuy=' + '1' + '&title=' + args.title,
            //           url: '/pages/confirm/index?type=1&id=' + args.service_id + '&styleid=' + args.styleid + '&url=' + args.url + '&frombuy=' + '1' + '&title=' + args.title,
            //     })

            // }
            // // 2：文章集合类型，3：画报集合类型，4：会员类型',   
            // else if (args.service_type == 2 || args.service_type == 3 ||
            //     args.service_type == 4) {
            //     wx.navigateTo({
            //         // url: '/pages/dingyuelist/index?frombuy=' + '0',
            //           url: '/pages/confirm/index?type=' + args.service_type + '&frombuy=' + '0',
            //     })
            // }



        })));
    }
});

export const container = connect(mapStateToProps, mapDispatchToProps);
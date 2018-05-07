

export const Actions = {
    NONE:"",
}
export const initalzeState = {


      userListInfo: [
            {
                icon: '../../images/iconfont-dingdan.png',
                text: '基础信息',
                pageUrl: '../baseinfo/index'

            },
            
            {
                icon: '../../images/iconfont-icontuan.png',
                text: '我的订阅',
                pageUrl: '/pages/dingyuelist/index?frombuy=' + '1'

            },
            {
                icon: '../../images/iconfont-cart.png',
                text: '设定抢约短信',
                pageUrl: '../benefit/index'

            },
            {
                icon: '../../images/iconfont-icontuan.png',
                text: '设定商户组',
                pageUrl: '../alliance/index'

            },
            // {
            //     icon: '../../images/iconfont-kefu.png',
            //     text: '联系客服',
            //     pageUrl: ''

            // },
            // {
            //     icon: '../../images/iconfont-help.png',
            //     text: '常见问题',
            //     pageUrl: ''

            // },
             {
                icon: '../../images/iconfont-help.png',
                text: '其他设置',
                pageUrl: '../settings/index'

            },

        ]
}
export const reKey ="myinfo"
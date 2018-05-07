export const Actions = {
	SELECT_ONECEBUY: "select_once_buy",
	SET_BUY_TYPE: "select_buy_type",
	SAVE_SINGLE_PRICE_INFO: "save_single_price_info"
};

export const initalzeState = {
	// 是否为合集购买
	mutibuy: false,
	// 当前购买类型
	//0:单个文章类型，充值后直接跳转到文章详情
	//1：单个情报物类型，充值后直接跳转到对应情报物页面详情（参数id还是styleid待定）
	//2，文章合集类型，重置后直接跳转到我的订阅列表
	//3，情报物集合类型，充值成功后直接跳转到“我的订阅页面"
	//4:会员类型，也跳转到我的订阅
	serviceType: -1,
	// 单个文章详情
	// {
	// 	id: 4,  写死4
	// 	chongzhi 与订购列表中的chongzhi对应
	// 	song: 中文价格
	// 	money: 价格单位分
	// 	styleid: 接口要用，无意义
	// }
	singlePriceInfo: {},
	// 订购服务期限：0->1个月; 1->2个月; 2->3个月; 3->6个月; 4->12个月
	curNav: 1,
	//curIndex: 0,
	// 订购服务期限列表
	navList: [{
			id: 0,
			chongzhi: '1个月',
			song: '￥10',
			money: "1000"
		},
		{
			id: 2,
			chongzhi: '3个月',
			song: '￥25',
			money: "2500"
		},
		{
			id: 3,
			chongzhi: '半年',
			song: '￥50',
			money: "5000"
		},
		{
			id: 4,
			chongzhi: '1年',
			song: '￥90',
			money: "9000"
		}
	],
};

export const reKey = "oncebuy";

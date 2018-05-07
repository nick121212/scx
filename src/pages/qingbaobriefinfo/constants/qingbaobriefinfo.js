export const Actions = {
    FETCH: "get_qingbao_brief_info"//获取情报物简介
};

export const initalzeState = {
    styleId: 0,
    index: -1,
    cost: -1,
    // orderLst: ['单次购买', '文章合计购买', '成为会员'],
    //  orderLst: ['购买刊物', '购买所有刊物'],
    orderLst: ['购买刊物'],
    order: ['单次购买'],

    briefinfo: {
    }
};

export const reKey = "qingbaobriefinfo";

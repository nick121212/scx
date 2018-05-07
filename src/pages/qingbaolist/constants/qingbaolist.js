export const Actions = {
    FETCH: "get_all_qingbao",
    FECTH_BY_IDS: "get_qingbao_by_ids",
    SETLOADING: "qingbao_set_loading",
    SETHASMORE: "qingbao_has_more",
    SETPAGINFO: "qingbaop_set_pag_info",
    FECTH_QINGBAO_BY_IDS: "fectch_qingbao_list_by_ids",//获取单个情报购买的情报列表
    RESET_PAGE_INFO: "reset_page_info",
    CHANGE_STATUS:"change_status",//更改情报物购买状态
};

export const initalzeState = {
    loading: false,
    hasMore: true,
    pageSize: 10,
    pageNum: 0,
    qingbaolst: [],
    qingbaoIndexPage: []//用于显示在首页的情报
};

export const reKey = "qingbaolist";

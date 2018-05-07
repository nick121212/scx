export const Actions = {
    FECTH_DINGYUE_LIST: "fecth_dingyue_lst",
    FECTH_DETAIL: "fecth_detail",
    FECTH_ARTICLES: "fectch_article_list",//获取文章合集或会员文章合集
    FECTH_ARTICLES_BY_IDS: "fectch_article_list_by_ids",//获取单个文章购买的链接
    SETLOADING: "qingbaowu_list_loading",//下拉订阅列表
    SETHASMORE: "qingbaowu_has_more",
    SETPAGINFO: "qingbaowu_set_pag_info",
    SET_OPEN_STATE: "set_open_state",
    FETCH_MY_QINGBAO: "get_my_qingbao",
    SET_MYQINGBAO_LOADING: "my_qingbao_set_loading",
    SET_MYQINGBAO_HASMORE: "my_qingbao_has_more",
    SET_MYQINGBAO_PAGINFO: "my_qingbaop_set_pag_info",
    FECTH_MYQINGBAO_BY_IDS: "fectch_my_qingbao_list_by_ids",//获取单个情报购买的情报列表
    RESET_PAGE_INFO:"reset_page_info"
};

export const initalzeState = {

    qingbaoloading: false,
    qingbaohasMore: true,
    qingbaopageSize: 10,
    qingbaopageNum: 0,
    loading: false,
    hasMore: true,
    pageSize: 3,
    pageNumber: 1,
    articles: [],//合集和会员购买的文章列表
    qingbaoarr: [],
    res: [],

    myqingbaolst: [],
    //res 包含
    // associator_collection:0,//会员服务,是会员服务 0，不是会员服务 1
    // article_id:[],//文章id服务，多个id用逗号分隔
    // pictorial_collection:[],//画报集服务,是画报集服务 0，不是画报集服务 1
    // pictorial_id:[],//画报id服务，多个id用逗号分隔
    // article_collection:[],//文集服务,是文集服务 0，不是文集服务 1
    // article_lst:[],//文章合集
};

export const reKey = "dingyuelist";

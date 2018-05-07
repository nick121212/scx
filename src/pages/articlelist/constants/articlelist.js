export const Actions = {
    FETCH_SHULIANBANG: "index_get_articles_shulian",
    SET_SHULIAN_LOADING: "index_set_loading_shulian",
    SET_SHULIAN_HASMORE: "index_has_more_shulian",
    SET_SHULIAN_PAGINFO: "index_set_pag_info_shulian",
     RESET_PAGE_INFO: "reset_page_info",
     CHANGE_STATUS:"change_status",
     CHANGE_ALL_SATTUS:"change_all_status"//文章集合购买，更改所有文章的订购状态（由未订购改成已订购）

};

export const initalzeState = {
    loading: false,
    hasMore: true,
    pageSize: 3,
    pageNum: 1,
    articles: []
};

export const reKey = "articlelist";

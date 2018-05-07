export const Actions = {
    FETCH: "index_get_articles",
    SETLOADING: "index_set_loading",
    SETHASMORE: "index_has_more",
    SETPAGINFO: "index_set_pag_info",
     CHANGE_STATUS:"change_status",
     CHANGE_ALL_SATTUS:"change_all_status"//文章集合购买，更改所有文章的订购状态（由未订购改成已订购）
};

export const initalzeState = {
    loading: false,
    hasMore: true,
    pageSize: 25,
    pageNum: 1,
    articles: [],
    articleLstIndexPage:[]
};

export const reKey = "article";

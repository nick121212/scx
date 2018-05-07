export const Actions = {
    FETCH: "order_history_fetch",
    SETLOADING: "order_history_set_loading",
    SETHASMORE: "order_history_has_more",
    SETPAGINFO: "order_history_set_pag_info"
};

export const initalzeState = {
    loading: false,
    hasMore: true,
    pageSize: 10,
    pageNum: 1,
    orders: []
};

export const reKey = "history";
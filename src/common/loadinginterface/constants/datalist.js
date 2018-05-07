export const Actions = {
    FETCH: "index_get_articles",
    SETLOADING: "index_set_loading",
    SETHASMORE: "index_has_more",
    SETPAGINFO: "index_set_pag_info"
};

export const initalzeState = {
    loading: false,
    hasMore: true,
    pageSize: 25,
    pageNum: 1,
    datalist: [],
    reKey:''
};

 export const reKey = "";
 export const setRekey=(key)=>{
     this.reKey = key;
 }

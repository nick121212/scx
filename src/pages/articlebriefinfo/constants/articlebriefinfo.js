export const Actions = {
    FETCH: "get_article_brief_info"
};

export const initalzeState = {
    articleId: 0,
    index:-1,
    // orderLst:['单次购买','文章合计购买','成为会员'],
     orderLst:['购买文章','购买所有文章'],
    cost:-1,
    briefinfo: {
    }
};

export const reKey = "articlebriefinfo";

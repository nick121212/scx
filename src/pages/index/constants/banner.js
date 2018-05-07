export const Actions = {
    FETCH: "index_get_banners"
};

export const initalzeState = {
    indicatorDots: true,
    interval: 3000,
    autoplay: true,
    duration: 500,
    banners: [{
        id: 1,
        title: "测试文章1",
        createAt: "2017-02-17 14:56",
        source: "爬虫",
        image: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1062375569,3048498252&fm=173&s=52800AAB0C434ED03298B7F803008015&w=501&h=308&img.JPEG",
        content: "测试文章1，红星大数据大数据大数据",
        author: "NICK"
    }, {
        id: 2,
        title: "测试文章2",
        createAt: "2017-02-17 14:56",
        source: "爬虫",
        image: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1062375569,3048498252&fm=173&s=52800AAB0C434ED03298B7F803008015&w=501&h=308&img.JPEG",
        content: "测试文章1，红星大数据大数据大数据",
        author: "NICK"
    }]
};

export const reKey = "banner";
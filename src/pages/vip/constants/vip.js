export const Actions = {
  SELECT: "select_item"
};

export const initalzeState = {
  disabled: false,
  curNav: 1,
  curIndex: 0,
  cart: [],
  cartTotal: 0,
  
  color: "limegreen",
  nocancel: false,


  selectIndex: -1,
  selectValue: '',
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
  },

  ],
  // items: [
  //   {name: '1个月 ￥10', value: '0',money:'1000'},
  //   {name: '3个月 ￥25', value: '2',money:'2500'},
  //   {name: '半年 ￥50', value: '3',money:'5000'},
  //   {name: '1年 ￥90', value: '4',money:'9000'}

  // ]
};

export const reKey = "vip";

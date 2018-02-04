import * as Types from "../action-types";

let initState = {
  // catId:'',
  // name:'',
  // en_name:'',
  // goodsId:'',
  // productsArr:{},
  // saleTime:'',
  // tags:[],
  top:'100%',
  flag:0,
  tab:true,
  goodsId:'',
  goodsSizeId:'',
  shopingDetail:[{id:'',goodsSId:''}]
};

function detail(state = initState, action) {
  switch (action.type) {
    // case Types.GET_DETAIL:
    //   return{
    //     ...state.detail
    //   };
    case Types.CHANGE_SHOPFLAG:
      return {
        ...state,top:action.payloads.top
      };
    case Types.CHANGE_SHOPDATA:
      return{
        ...state,flag:action.flag.flag
      };
    case Types.TAB_SHOPBTN:
      return{
        ...state,tab:action.tab.tab
      };
    case Types.PUSH_GOODS_DETAIL:
      return{
        ...state,goodsId:action.goods.goodsId,goodsSizeId:action.goods.goodsSizeId,num:action.goods.num
      };
  }
  return state;
}

export default detail;
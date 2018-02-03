import * as Types from "../action-types";
import {getDetail} from "../../api/detail";

let actions = {
  // getDetailAPI() {
  //   return function (dispatch, getState) {
  //     dispatch({type: Types.GET_DETAIL, payload: getDetail()});
  //   }
  // },
  changeShopFlag(payloads){
    return {type:Types.CHANGE_SHOPFLAG,payloads}
  },
  changeShopData(flag){
    return {type:Types.CHANGE_SHOPDATA,flag}
  },
  tabShopTab(tab){
    return {type:Types.TAB_SHOPBTN,tab}
  }
};
export default actions;
import * as Types from "../action-types";
import {getDetail} from "../../api/detail";

let actions = {
  getDetailAPI() {
    return function (dispatch, getState) {
      dispatch({type: Types.GET_DETAIL, payload: getDetail()});
    }
  },
  changeShopFlag(payloads){
    console.log(payloads);
    return {type:Types.CHANGE_SHOPFLAG,payloads}
  }
};
export default actions;
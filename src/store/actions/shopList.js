import * as Types from "../action-types";

let actions = {
  changeList(id,num) {
    console.log(id, num);
    return {type: Types.CHANGE_LIST, info:{id,num}};
  }
};
export default actions;
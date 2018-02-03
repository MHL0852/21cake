import * as Types from "../action-types";

let initState = {
  top:'100%',
  flag:0
};

function detail(state = initState, action) {
  switch (action.type) {
    case Types.CHANGE_SHOPFLAG:
      return {
        ...state,top:action.payloads.top
      };
    case Types.CHANGE_SHOPDATA:
      return{
        ...state,flag:action.flag.flag
      }
  }
  return state;
}

export default detail;
import * as Types from "../action-types";

let initState = {
  top:'100%'
};

function detail(state = initState, action) {
  switch (action.type) {
    case Types.CHANGE_SHOPFLAG:
      return {
        ...state,top:action.payloads.top
      };
  }
  return state;
}

export default detail;
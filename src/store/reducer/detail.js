import * as Types from "../action-types";

let initState = {
    boxFlag:false
};

function detail(state = initState, action) {
  console.log(action);
  switch (action.type) {
    case Types.CHANGE_SHOPFLAG:
      return {
        ...state,boxFlag:action.flag
      };
  }
  return state;
}

export default detail;
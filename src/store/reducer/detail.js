import * as Types from "../action-types";

let initState = {

};

function detail(state = initState, action) {
  switch (action.type) {
    case Types.GET_DETAIL:
      return {
        ...state.detail
      };
  }
  return state;
}

export default detail;
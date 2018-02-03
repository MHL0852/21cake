import * as Types from "../action-types"

let initState = {
  listData: []
};

function shopList(state = initState, action) {
  switch (action.type) {
    case Types.CHANGE_LIST:
      let stateTemp = state.listData, flag = true;
    {stateTemp.length?stateTemp.map(item => {
        if (item.id && (item.id=== action.info.id)) {
          flag = false;
          return item.num + action.info.num;
        }
        return item;
      }):(stateTemp.push({id: action.info.id, num: 1}),flag=false)}
      flag ? stateTemp.push({id: action.info.id, num: 1}) : null;
      return {...state,listData:stateTemp};
  }
  return state;
}

export default shopList;
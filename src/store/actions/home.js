import * as Types from "../action-types";
import {getSliders} from "../../api/home";

let actions = {
    getHomeAPI() {
        return function (dispatch, getState) {
            dispatch({type: Types.GET_HOME, payload: getSliders()});
        }
    }
};
export default actions;
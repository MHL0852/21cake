import * as Types from "../action-types";

let initState = {
    sliders: [],
    navList: [],
    activity: [{
        description: "",
        href: "",
        img_url: "",
        name: "",
        remain: "",
        target: ''
    }],
    bangdan: [],
    renqi: {},
    newProduct: {}
};

function home(state = initState, action) {
    switch (action.type) {
        case Types.GET_HOME:
            return {
                ...state.home,
                sliders: action.payload[0].data,
                navList: action.payload[2].data,
                bangdan: action.payload[3].data[0].contents,
                newProduct: action.payload[3].data[1],
                renqi: action.payload[3].data[2],
                activity: action.payload[4].data
            };
    }
    return state;
}

export default home;
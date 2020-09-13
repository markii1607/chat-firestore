import { userConstant } from "../actions/constants";

const initState = {
    users: [],
    conversations: [],
}

export default (state = initState, action) => {
    switch (action.type) {
        case `${userConstant.GET_REALTIME_USERS}_REQUEST`:
            // state = {
            //     ...state,
            //     authenticating: true
            // }
            break;
        case `${userConstant.GET_REALTIME_USERS}_SUCCESS`:
            state = {
                ...state,
                users: action.payload.users
            }
            break;
        case userConstant.GET_REALTIME_MESSAGES:
            state = {
                ...state,
                conversations: action.payload.conversations
            }
            break;
            // case `${userConstant.GET_REALTIME_USERS}_FAILURE`:
            //     state = {
            //         ...state,
            //         users: action.payload.users
            //     }
            //     break;

        default:
            break;
    }

    return state;
}
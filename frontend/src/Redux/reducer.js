import {
    GET_ASSETS_REQUEST,
    GET_ASSETS_SUCCESS,
    GET_ASSETS_FAILURE,
    GET_ASSET_BY_ID_REQUEST,
    GET_ASSET_BY_ID_SUCCESS,
    GET_ASSET_BY_ID_FAILURE,
    POST_ASSET_REQUEST,
    POST_ASSET_SUCCESS,
    POST_ASSET_FAILURE
} from './actionType'

const initState = {
    lists: [],
    imageDetails: []
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case "SORT_CARD":
            return {
                ...state,
                lists: payload
            }
        case "DELETE_CARD":
            return {
                ...state,
                lists: payload
            };
        case "EDIT_CARD":
            return {
                ...state,
                lists: payload
            };
        case GET_ASSETS_REQUEST:
            return {
                ...state,
            };
        case GET_ASSETS_SUCCESS:
            console.log(payload)
            return {
                ...state,
                lists: payload
            };
        case GET_ASSETS_FAILURE:
            return {
                ...state,
            }
        case GET_ASSET_BY_ID_REQUEST:
            return {
                ...state,
            };

        case GET_ASSET_BY_ID_SUCCESS:
            return {
                ...state,
                imageDetails: payload
            };
        case GET_ASSET_BY_ID_FAILURE:
            return {
                ...state,
            }
        case POST_ASSET_REQUEST:
            return {
                ...state,
            };

        case POST_ASSET_SUCCESS:
            console.log(payload)
            return {
                ...state,
                imageDetails: payload
            };
        case POST_ASSET_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default reducer;
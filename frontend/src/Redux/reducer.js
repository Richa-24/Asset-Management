import {
    GET_ASSETS_REQUEST,
    GET_ASSETS_SUCCESS,
    GET_ASSETS_FAILURE,
    GET_ASSET_BY_ID_REQUEST,
    GET_ASSET_BY_ID_SUCCESS,
    GET_ASSET_BY_ID_FAILURE
} from './actionType'

const initState = {
    lists: [],
    imageDetails: []
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
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
            console.log(payload)
            return {
                ...state,
                imageDetails: payload
            };
        case GET_ASSET_BY_ID_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default reducer;
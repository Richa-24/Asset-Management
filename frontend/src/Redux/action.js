import axios from 'axios'
import {
    GET_ASSETS_REQUEST,
    GET_ASSETS_SUCCESS,
    GET_ASSETS_FAILURE,
    GET_ASSET_BY_ID_REQUEST,
    GET_ASSET_BY_ID_SUCCESS,
    GET_ASSET_BY_ID_FAILURE
} from './actionType'

export const assetsRequest = (payload) => {
    return {
        type: GET_ASSETS_REQUEST,
        payload
    }
}

export const assetsSuccess = (payload) => {
    return {
        type: GET_ASSETS_SUCCESS,
        payload
    }
}

export const assetsFailure = (payload) => {
    return {
        type: GET_ASSETS_FAILURE,
        payload
    }
}

export const assetsRequestCall = (payload) => (dispatch) => {
    dispatch(assetsRequest(payload));
    return axios
        .get("https://5fbcebcf3f8f90001638c720.mockapi.io/api/v1/assets")
        .then((res) => {
            console.log(res)
            dispatch(assetsSuccess(res.data));
        })
        .catch((err) => {
            dispatch(assetsFailure(err?.response?.data?.message));
        });
};

export const assetRequestId = (payload) => {
    return {
        type: GET_ASSET_BY_ID_REQUEST,
        payload
    }
}

export const assetSuccessId = (payload) => {
    return {
        type: GET_ASSET_BY_ID_SUCCESS,
        payload
    }
}

export const assetFailureId = (payload) => {
    return {
        type: GET_ASSET_BY_ID_FAILURE,
        payload
    }
}

export const assetRequestCallById = (payload) => (dispatch) => {
    dispatch(assetRequestId(payload));
    return axios
        .get(`https://5fbcebcf3f8f90001638c720.mockapi.io/api/v1/assets/${payload}`)
        .then((res) => {
            console.log(res)
            dispatch(assetSuccessId(res.data));
        })
        .catch((err) => {
            dispatch(assetFailureId(err?.response?.data?.message));
        });
};

export const sortCards = (payload) => (dispatch) => {
    return dispatch({ type: "SORT_CARD", payload });
};



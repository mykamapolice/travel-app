import { FETCH_STATE_BEGIN, FETCH_STATE_FAILURE, FETCH_STATE_SUCCESS, FETCH_DETAILS_SUCCESS , FETCH_DELETE_DETAILS } from "../actions/actionTypes";

const baseURL = 'https://damp-thicket-85004.herokuapp.com/';

const countriesURL = 'api/get/countries';

export const fetchStateBegin = () => ({
    type: FETCH_STATE_BEGIN
});

export const fetchStateSuccess = (countries: any) => ({
    type: FETCH_STATE_SUCCESS,
    payload: countries
});

export const fetchStateFailure = (error: any)=> ({
    type: FETCH_STATE_FAILURE,
    payload: { error }
});

export const fetchDetailsSuccess = (details: any) => ({
    type: FETCH_DETAILS_SUCCESS,
    payload: details
});


export const fetchDeleteDetails = () =>({
    type: FETCH_DELETE_DETAILS
});


export function fetchCountries() {

    return (dispatch: any) => {
        dispatch(fetchStateBegin());
        return (page = 0) => {
            return fetch(`${baseURL}${countriesURL}/${page}`)
                .then(handleErrors)
                .then(res => res.json())
                .then(json => {
                    dispatch(fetchStateSuccess(json.countries));
                    return json.countries;
                })
                .catch(error => dispatch(fetchStateFailure(error)));
        };
    };
}

function handleErrors(response: any) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}


import {
  fetchDetailsSuccess,
  fetchStateSuccess,
} from '../actionCreators/fetchData';

const baseURL = 'https://damp-thicket-85004.herokuapp.com/';

const countriesURL = 'api/get/countries';

const countryInfoURL = 'api/get/countryInfo';

export function fetchCountries() {
  return async (dispatch: any) => {
    const resp = await fetch(`${baseURL}${countriesURL}/0`);
    handleErrors(resp);
    const countries = await resp.json();
    await dispatch(fetchStateSuccess(countries));
  };
}

export function fetchDetails(country: string) {
  return async (dispatch: any) => {
    const resp = await fetch(`${baseURL}${countryInfoURL}/${country}`);
    handleErrors(resp);
    const details = await resp.json();
    dispatch(fetchDetailsSuccess(details));
  };
}

export function fetchDetailsWithoutState(link: string) {
  return async (dispatch: any) => {
    const resp = await fetch(`${baseURL}${countriesURL}/0`);
    handleErrors(resp);
    const countries = await resp.json();
    await dispatch(await fetchStateSuccess(countries));
    const respDetails = await fetch(`${baseURL}${countryInfoURL}/${link}`);
    handleErrors(respDetails);
    const details = await respDetails.json();
    dispatch(fetchDetailsSuccess(details));
  };
}

function handleErrors(response: any) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

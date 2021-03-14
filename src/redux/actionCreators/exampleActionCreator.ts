import {
  ADD,
  SET_COUNTRIES,
  SET_COUNTRY,
  SET_LANGUAGE,
  SET_SEARCH,
  SET_SEARCH_TOGGLE,
} from '../actions/actionTypes';

export function add() {
  return {
    type: ADD,
  };
}

export const setCountries = function (countries: any[]) {
  return {
    type: SET_COUNTRIES,
    countries,
  };
};

export const setCountry = function (country: string) {
  return {
    type: SET_COUNTRY,
    country,
  };
};

export const setLanguage = (lang: string) => {
  return {
    type: SET_LANGUAGE,
    lang,
  };
};




export const setSearch = (inputText: string) => (
  {
      type: SET_SEARCH,
      inputText
    }
)

export const setSearchToggle = (value: boolean) => (
  {
      type: SET_SEARCH_TOGGLE,
      value
    }
)
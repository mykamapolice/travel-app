import { SET_COUNTRIES, SET_COUNTRY, SET_SEARCH, SET_SEARCH_TOGGLE } from '../actions/actionTypes';
import { initialState } from '../initialState';





const countryReducer =  (state = initialState, action: any) => {
  const stateCopy: any = { ...state };
  switch (action.type) {
    case SET_COUNTRIES:
      stateCopy.countries = [...action.countries];
      return stateCopy;
    case SET_COUNTRY:
      stateCopy.currentCountry = action.country;
      return stateCopy;
    case SET_SEARCH:
      stateCopy.searchInput.text = action.inputText;
      return stateCopy;
    case SET_SEARCH_TOGGLE:
      stateCopy.searchInput.enabled = action.value;
      return stateCopy;
    default:
      return state;
  }
};





export default countryReducer;

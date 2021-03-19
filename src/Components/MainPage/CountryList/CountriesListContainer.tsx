import React from 'react';
import { connect } from 'react-redux';
import CountriesList from './CountriesList';
import {
  setSearchIsDisabled,
} from '../../../redux/actionCreators/exampleActionCreator';
import { fetchCountries } from "../../../redux/actions/stateAction";

const countryFilter = function (searchInputTxt: string,
                                countries: any,
                                lang: string) {
let countriesCopy;
  if (!searchInputTxt) {
    countriesCopy = [...countries];
  }
  else {
   countriesCopy = countries.filter((country: any) => {
      if (
        country.name.toLowerCase()
          .search(searchInputTxt.toLowerCase()) !== -1 ||

        country.capital.toLowerCase()
          .search(searchInputTxt.toLowerCase()) !== -1
      ) {
        return country;
      }
      return null;
    });
  }
  return countriesCopy;
};

const excretion = (name: string, inputText: string) => {
  const countryIndex = name.toLowerCase().search(inputText.toLowerCase());
  return (
    <>
      {countryIndex !== -1 ? (
        <>
          {name.slice(0, countryIndex)}
          <span className="mark">
            {name.slice(countryIndex, countryIndex + inputText.length)}
          </span>
          {name.slice(countryIndex + inputText.length)}
        </>
      ) : (
        <>{name}</>
      )}
    </>
  );
};

const MapStateToProps = ({ langReducer,
                           searchReducer:{ text },
                           countryReducer:{ loading,
                             error, countries } }:any) => {
  const countriesArray = countries.map((el:any)=>{
    return {
      name: el[`name${langReducer.toUpperCase()}`],
      capital : el.capital[langReducer],
      photo : el.photo,
      nameEN : el.nameEN
    };
  });
  return {
    countriesList: countryFilter(text, countriesArray,langReducer),
    loading,
    error,
    text,
  };
};

const MapDispatchToProps = (dispatch: any) => {
  return {
    getCountries: () => {dispatch(fetchCountries());},
    setSearchIsDisabled: () => dispatch(setSearchIsDisabled(false)),
    setExcretion: (name: string, inputText: string) =>
      excretion(name, inputText),
  };
};

const CountryListContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(CountriesList);

export default CountryListContainer;

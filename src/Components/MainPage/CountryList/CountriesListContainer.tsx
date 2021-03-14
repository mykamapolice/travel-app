import React from 'react';
import { connect } from 'react-redux';
import CountriesList from './CountriesList';
import { setCountries, setSearchToggle } from '../../../redux/actionCreators/exampleActionCreator';

const countryFilter = function (searchInputTxt: string, countries: any) {
  let countriesCopy;
  if (!searchInputTxt) {
    countriesCopy = [...countries];
  } else {
    countriesCopy = countries.filter((country: any) => {
      if (
        country.name.toLowerCase().search(searchInputTxt.toLowerCase()) != -1 ||
        country.capital.toLowerCase().search(searchInputTxt.toLowerCase()) != -1
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

const MapStateToProps = ({
  countryReducer: { searchInput:{text}, countries },
}: any) => {
  return {
    countriesList: countryFilter(text, countries),
    text,
  };
};

const MapDispatchToProps = (dispatch: any) => {
  return {
    setCountries: (countriesList: any) => dispatch(setCountries(countriesList)),
    setExcretion: (name: string, inputText: string) =>
      excretion(name, inputText),
      setSearchToggle : (value:boolean)=> setSearchToggle(value)
  };
};

const CountryListContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(CountriesList);

export default CountryListContainer;

import { connect } from 'react-redux';
import CountryPage from './CountryPage';
import { setCountries } from '../../../redux/actionCreators/exampleActionCreator';
import {ICountries} from '../../../Interfaces'; 



const MapStateToProps = function (state: any, { link }: any) {
  return {
    country: state.countryReducer.countries.find(

      (el: any) =>
  el.name.toLowerCase() === link.toLowerCase()
    ),
  };
};

const MapDispatchToProps = function (dispatch: any) {
  return {
    setCountries: (countriesList: ICountries[]) => dispatch(setCountries(countriesList)),
  };
};

const CountryListContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(CountryPage);

export default CountryListContainer;

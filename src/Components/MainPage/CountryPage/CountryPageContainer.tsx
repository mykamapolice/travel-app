import { connect } from 'react-redux';
import CountryPage from './CountryPage';
import {
  setSearchIsDisabled,
} from '../../../redux/actionCreators/exampleActionCreator';
// import { ICountries } from '../../../Interfaces';
import { fetchDetails, fetchDetailsWithoutState } from '../../../redux/actions/stateAction';
import { fetchDeleteDetails } from '../../../redux/actionCreators/fetchData';

const MapStateToProps = (state: any, { link }: any) => {
  return {
    link,
    lang: state.langReducer,
    loading: state.countryPageReducer.loading,
    countryDetails: state.countryPageReducer.data,
    country: state.countryReducer.countries.length
      ? state.countryReducer.countries.find(
        (el: any) => el.nameEN === link
      ) : null,
  };
};

const MapDispatchToProps = (dispatch: any) => ({
  fetchDeleteDetails: () => dispatch(fetchDeleteDetails()),
  fetchDetails: (name: string) => dispatch(fetchDetails(name)),
  setSearchIsDisabled: () => dispatch(setSearchIsDisabled(true)),
  fetchDetailsWithoutState: (link: string) => dispatch(
    fetchDetailsWithoutState(link))
});

const CountryListContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(CountryPage);

export default CountryListContainer;

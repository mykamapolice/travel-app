import { combineReducers } from 'redux';
import countryReducer from './countriesReducer';
import langReducer from './langReducer';
import searchReducer from './searchReducer';
import countryPageReducer from './countryPageReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  countryReducer,
  langReducer,
  searchReducer,
  countryPageReducer,
  userReducer,
});

export default reducers;

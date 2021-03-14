import { combineReducers } from 'redux';
import countryReducer from './countries-reducer';
import langReducer from './langReducer';

const reducers = combineReducers({
  countryReducer,
  langReducer,
});

export default reducers;

import { ISearchInput } from '../../Interfaces';
import { SET_SEARCH, SET_SEARCH_IS_DISABLED } from '../actions/actionTypes';

type SearchActionType = {
  type: string;
  inputText: string;
  value: boolean;
};

const initialState = {
  text:'',
  disabled: false
  };

const searchReducer = (state = initialState, action: SearchActionType) => {
  const stateCopy: ISearchInput = { ...state };
  switch (action.type) {
    case SET_SEARCH:
      stateCopy.text = action.inputText;
      return stateCopy;
    case SET_SEARCH_IS_DISABLED:
      stateCopy.disabled = action.value;
      return stateCopy;
    default:
      return state;
  }
};

export default searchReducer;

import {
  SET_COUNTRY,
  FETCH_DETAILS_SUCCESS,
  FETCH_DELETE_DETAILS,
} from '../actions/actionTypes';

const initialState = {
  loading: true,
  error: null,
  data: {
    currencyCode: '',
    details: {
      info: '',
      views: [
        {
          imgURL: '',
          viewName: '',
          about: '',
        },
      ],
      videoURL: '',
      mapCoords: {
        center: {},
        capital: {},
      },
    },
    rating: 0,
  },
};

const countryPageReducer = (state = initialState, action: any) => {
  const stateCopy: any = { ...state };
  switch (action.type) {
    case FETCH_DETAILS_SUCCESS:
      return {
        ...initialState,
        loading: false,
        data: { ...action.payload.details },
      };
    case FETCH_DELETE_DETAILS:
      return { ...initialState, loading: true };

    case SET_COUNTRY:
      return stateCopy;
    default:
      return state;
  }
};

export default countryPageReducer;

import {
  REQUEST_COUNTRY,
  REQUEST_COUNTRY_SUCCESS,
  REQUEST_COUNTRY_ERROR,
} from '../actions';

const INITIAL_STATE = {
  country: [],
  loadingCountry: false,
  error: '',
};

const reducerCountry = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_COUNTRY:
    return {
      ...state,
      loadingCountry: action.payload.loadingCountry,
    };
  case REQUEST_COUNTRY_SUCCESS:
    return {
      ...state,
      country: action.payload.dataCountry,
      loadingCountry: action.payload.loadingCountry,
    };
  case REQUEST_COUNTRY_ERROR:
    return {
      ...state,
      error: action.payalod.error,
      loadingCountry: action.payload.loadingCountry,
    };
  default:
    return state;
  }
};

export default reducerCountry;

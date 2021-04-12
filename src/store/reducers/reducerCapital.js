import {
  REQUEST_CAPITAL,
  REQUEST_CAPITAL_SUCCESS,
  REQUEST_CAPITAL_ERROR,
} from '../actions';

const INITIAL_STATE = {
  capital: [],
  loadingCapital: false,
  error: '',
};

const reducerCapital = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CAPITAL:
    return {
      ...state,
      loadingCapital: action.payload.loadingCapital,
    };
  case REQUEST_CAPITAL_SUCCESS:
    return {
      ...state,
      capital: action.payload.dataCapital,
      loadingCapital: action.payload.loadingCapital,
    };
  case REQUEST_CAPITAL_ERROR:
    return {
      ...state,
      error: action.payalod.error,
      loadingCapital: action.payload.loadingCapital,
    };
  default:
    return state;
  }
};

export default reducerCapital;

import {
  REQUEST_LANGUAGE,
  REQUEST_LANGUAGE_SUCCESS,
  REQUEST_LANGUAGE_ERROR,
} from '../actions';

const INITIAL_STATE = {
  language: [],
  loadingLanguage: false,
  error: '',
};

const reducerLanguage = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_LANGUAGE:
    return {
      ...state,
      loadingLanguage: action.payload.loadingLanguage,
    };
  case REQUEST_LANGUAGE_SUCCESS:
    return {
      ...state,
      language: action.payload.dataLanguage,
      loadingLanguage: action.payload.loadingLanguage,
    };
  case REQUEST_LANGUAGE_ERROR:
    return {
      ...state,
      error: action.payalod.error,
      loadingLanguage: action.payload.loadingLanguage,
    };
  default:
    return state;
  }
};

export default reducerLanguage;

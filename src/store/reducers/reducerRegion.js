import {
  REQUEST_REGION,
  REQUEST_REGION_SUCCESS,
  REQUEST_REGION_ERROR,
} from '../actions';

const INITIAL_STATE = {
  region: [],
  loadingRegion: false,
  error: '',
};

const reducerRegion = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_REGION:
    return {
      ...state,
      loadingRegion: action.payload.loadingRegion,
    };
  case REQUEST_REGION_SUCCESS:
    return {
      ...state,
      region: action.payload.dataRegion,
      loadingRegion: action.payload.loadingRegion,
    };
  case REQUEST_REGION_ERROR:
    return {
      ...state,
      error: action.payalod.error,
      loadingRegion: action.payload.loadingRegion,
    };
  default:
    return state;
  }
};

export default reducerRegion;

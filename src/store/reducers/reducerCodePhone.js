import {
  REQUEST_PHONE,
  REQUEST_PHONE_SUCCESS,
  REQUEST_PHONE_ERROR,
} from '../actions';

const INITIAL_STATE = {
  phone: [],
  loadingPhone: false,
  error: '',
};

const reducerCodePhone = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_PHONE:
    return {
      ...state,
      loadingPhone: action.payload.loadingPhone,
    };
  case REQUEST_PHONE_SUCCESS:
    return {
      ...state,
      phone: action.payload.dataPhone,
      loadingPhone: action.payload.loadingPhone,
    };
  case REQUEST_PHONE_ERROR:
    return {
      ...state,
      error: action.payalod.error,
      loadingPhone: action.payload.loadingPhone,
    };
  default:
    return state;
  }
};

export default reducerCodePhone;

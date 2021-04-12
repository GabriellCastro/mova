import { getByCodePhone } from '../../services/api';

export const REQUEST_PHONE = 'REQUEST_PHONE';
export const REQUEST_PHONE_SUCCESS = 'REQUEST_PHONE_SUCCESS';
export const REQUEST_PHONE_ERROR = 'REQUEST_PHONE_ERROR';

const requestPhone = () => ({
  type: REQUEST_PHONE,
  payload: { loadingPhone: true },
});

const requestPhoneSuccess = (dataPhone) => ({
  type: REQUEST_PHONE_SUCCESS,
  payload: { dataPhone, loadingPhone: false },
});

const requestPhoneError = (error) => ({
  type: REQUEST_PHONE_ERROR,
  payload: { error, loadingPhone: false },

});

export const fetchPhone = (cod) => async (dispatch) => {
  dispatch(requestPhone());
  try {
    const dataPhone = await getByCodePhone(cod);
    dispatch(requestPhoneSuccess(dataPhone));
  } catch (error) {
    dispatch(
      requestPhoneError(error),
    );
  }
};

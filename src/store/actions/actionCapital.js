import { getByCapital } from '../../services/api';

export const REQUEST_CAPITAL = 'REQUEST_CAPITAL';
export const REQUEST_CAPITAL_SUCCESS = 'REQUEST_CAPITAL_SUCCESS';
export const REQUEST_CAPITAL_ERROR = 'REQUEST_CAPITAL_ERROR';

const requestCapital = () => ({
  type: REQUEST_CAPITAL,
  payload: { loadingCapital: true },
});

const requestCapitalSuccess = (dataCapital) => ({
  type: REQUEST_CAPITAL_SUCCESS,
  payload: { dataCapital, loadingCapital: false },
});

const requestCapitalError = (error) => ({
  type: REQUEST_CAPITAL_ERROR,
  payload: { error, loadingCapital: false },
});

export const fetchCapital = (capital) => async (dispatch) => {
  dispatch(requestCapital());
  try {
    const dataCapital = await getByCapital(capital);
    dispatch(requestCapitalSuccess(dataCapital));
  } catch (error) {
    dispatch(requestCapitalError(error));
  }
};

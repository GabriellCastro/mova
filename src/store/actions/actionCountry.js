import { getByCountry } from '../../services/api';

export const REQUEST_COUNTRY = 'REQUEST_COUNTRY';
export const REQUEST_COUNTRY_SUCCESS = 'REQUEST_COUNTRY_SUCCESS';
export const REQUEST_COUNTRY_ERROR = 'REQUEST_COUNTRY_ERROR';

const requestCountry = () => ({
  type: REQUEST_COUNTRY,
  payload: { loadingCountry: true },
});

const requestCountrySuccess = (dataCountry) => ({
  type: REQUEST_COUNTRY_SUCCESS,
  payload: { dataCountry, loadingCountry: false },
});

const requestCountryError = (error) => ({
  type: REQUEST_COUNTRY_ERROR,
  payload: { error, loadingCountry: false },
});

export const fetchCountry = (country) => async (dispatch) => {
  dispatch(requestCountry());
  try {
    const dataCountry = await getByCountry(country);
    dispatch(requestCountrySuccess(dataCountry));
  } catch (error) {
    dispatch(requestCountryError(error));
  }
};

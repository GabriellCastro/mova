import { getByLanguege } from '../../services/api';

export const REQUEST_LANGUAGE = 'REQUEST_LANGUAGE';
export const REQUEST_LANGUAGE_SUCCESS = 'REQUEST_LANGUAGE_SUCCESS';
export const REQUEST_LANGUAGE_ERROR = 'REQUEST_LANGUAGE_ERROR';

const requestLanguage = () => ({
  type: REQUEST_LANGUAGE,
  payload: { loadingLanguage: true },
});

const requestLanguageSuccess = (dataLanguage) => ({
  type: REQUEST_LANGUAGE_SUCCESS,
  payload: { dataLanguage, loadingLanguage: false },
});

const requestLanguageError = (error) => ({
  type: REQUEST_LANGUAGE_ERROR,
  payload: { error, loadingLanguage: false },

});

export const fetchLanguage = (language) => async (dispatch) => {
  dispatch(requestLanguage());
  try {
    const dataLanguage = await getByLanguege(language);
    dispatch(requestLanguageSuccess(dataLanguage));
  } catch (error) {
    dispatch(
      requestLanguageError(error),
    );
  }
};

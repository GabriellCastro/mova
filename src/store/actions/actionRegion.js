import { getByRegion } from '../../services/api';

export const REQUEST_REGION = 'REQUEST_REGION';
export const REQUEST_REGION_SUCCESS = 'REQUEST_REGION_SUCCESS';
export const REQUEST_REGION_ERROR = 'REQUEST_REGION_ERROR';

const requestRegion = () => ({
  type: REQUEST_REGION,
  payload: { loadingRegion: true },
});

const requestRegionSuccess = (dataRegion) => ({
  type: REQUEST_REGION_SUCCESS,
  payload: { dataRegion, loadingRegion: false },
});

const requestRegionError = (error) => ({
  type: REQUEST_REGION_ERROR,
  payload: { error, loadingRegion: false },

});

export const fetchRegion = (region) => async (dispatch) => {
  dispatch(requestRegion());
  try {
    const dataRegion = await getByRegion(region);
    dispatch(requestRegionSuccess(dataRegion));
  } catch (error) {
    dispatch(
      requestRegionError(error),
    );
  }
};

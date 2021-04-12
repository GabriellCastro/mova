import { combineReducers } from 'redux';
import reducerRegion from './reducerRegion';
import reducerCapital from './reducerCapital';
import reducerLanguage from './reducerLanguage';
import reducerCodePhone from './reducerCodePhone';
import reducerCountry from './reducerCountry';

const rootReducers = combineReducers({
  reducerRegion,
  reducerCapital,
  reducerLanguage,
  reducerCodePhone,
  reducerCountry,
});

export default rootReducers;

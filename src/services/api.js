const END_POINT = {
  region: 'https://restcountries.eu/rest/v2/region/',
  capital: 'https://restcountries.eu/rest/v2/capital/',
  languege: 'https://restcountries.eu/rest/v2/lang/',
  country: 'https://restcountries.eu/rest/v2/name/',
  codePhone: 'https://restcountries.eu/rest/v2/callingcode/',
};

const fetchApi = async (endPoint) => {
  console.log(endPoint);
  const response = await fetch(endPoint);
  const resolve = await response.json();
  return resolve;
};

export const getByRegion = (region) => {
  const response = fetchApi(`${END_POINT.region}${region}`);
  return response;
};

export const getByCapital = (capital) => {
  const response = fetchApi(`${END_POINT.capital}${capital}`);
  return response;
};

export const getByLanguege = (languege) => {
  const response = fetchApi(`${END_POINT.languege}${languege}`);
  return response;
};

export const getByCountry = (country) => {
  const response = fetchApi(`${END_POINT.country}${country}`);
  return response;
};

export const getByCodePhone = (codePhone) => {
  const response = fetchApi(`${END_POINT.codePhone}${codePhone}`);
  return response;
};

import {
  REQUEST_PLANETS_INFORMATION,
  PLANET_INFO_REQUEST_SUCCESS,
  PLANET_INFO_REQUEST_FAILURE,
  FILTER_BY_TEXT,
} from './actions';

import getAllPlanetsFromAPI from '../service/starWarsAPI';

const requestPlanetsInfo = () => ({
  type: REQUEST_PLANETS_INFORMATION,
  loading: true,
});

const requestPlanetInfoSucess = ({ results }) => ({
  type: PLANET_INFO_REQUEST_SUCCESS,
  loading: false,
  data: results,
});

const requestPlantInfoFailure = (error) => ({
  type: PLANET_INFO_REQUEST_FAILURE,
  loading: false,
  data: error,
});

function fetchingPlanetsInfo() {
  return (dispatch) => {
    dispatch(requestPlanetsInfo());
    return getAllPlanetsFromAPI().then(
      (planet) => dispatch(requestPlanetInfoSucess(planet)),
      (error) => dispatch(requestPlantInfoFailure(error.message)),
    );
  };
}

const filterByText = (name) => ({
  type: FILTER_BY_TEXT,
  name,
});

export {
  requestPlanetsInfo,
  requestPlanetInfoSucess,
  requestPlantInfoFailure,
  fetchingPlanetsInfo,
  filterByText,
};

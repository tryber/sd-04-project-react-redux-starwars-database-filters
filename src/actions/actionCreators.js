import {
  REQUEST_PLANETS_INFORMATION,
  PLANET_INFO_REQUEST_SUCCESS,
  PLANET_INFO_REQUEST_FAILURE,
  FILTER_BY_TEXT,
  SAVE_FILTER_DATA,
  RESET_FILTER,
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

const saveFilterData = (column, comparison, value) => ({
  type: SAVE_FILTER_DATA,
  column,
  comparison,
  value,
});




export const resetFilter = (filters) => ({
  type: RESET_FILTER,
  filters,
});
export {
  requestPlanetsInfo,
  requestPlanetInfoSucess,
  requestPlantInfoFailure,
  fetchingPlanetsInfo,
  filterByText,
  saveFilterData,
};

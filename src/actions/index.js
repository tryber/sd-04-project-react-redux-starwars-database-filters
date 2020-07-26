import getPlanetsAPI from '../services/planetsAPI';

export const IS_LOADED = 'IS_LOADED';
export const DATA_RESULTS = 'DATA_RESULTS';

const isLoaded = () => ({
  type: 'IS_LOADED',
});

const dataResults = (data) => ({
  type: 'DATA_RESULTS',
  data,
});

export default function fetchPlanets() {
  return (dispatch) => {
    dispatch(isLoaded());
    getPlanetsAPI()
      .then((data) => dispatch(dataResults(data.results)));
  };
}

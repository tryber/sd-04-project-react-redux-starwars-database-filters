import getPLanets from '../service/swApi';

export const REQUEST_SW_PLANETS = 'REQUEST_SW_PLANETS';
export const REQUEST_SW_PLANETS_SUCCESS = 'REQUEST_SW_PLANETS_SUCCESS';

const requestSWPlanets = () => ({
  type: REQUEST_SW_PLANETS,
});

const receiveSWPlanets = ({ results }) => ({
  type: REQUEST_SW_PLANETS_SUCCESS,
  results,
});

function fetchSWPlanets() {
  return (dispatch) => {
    dispatch(requestSWPlanets());
    return getPLanets()
      .then((data) => dispatch(receiveSWPlanets(data)))
      .catch((error) => {
        console.error(error);
      });
  };
}

export default fetchSWPlanets;

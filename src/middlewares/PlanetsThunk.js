import { planetsIsLoading, planetsFetched, planetsHasErrored } from '../actions/PlanetsActions';

const planetsFetchData = (url) => (dispatch) => {
  dispatch(planetsIsLoading(true));

  fetch(url)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);

      dispatch(planetsIsLoading(false));

      return response;
    })
    .then((response) => response.json())
    .then((planets) => dispatch(planetsFetched(planets)))
    .catch((error) => dispatch(planetsHasErrored(true, error.message)));
};

export default planetsFetchData;

export const PLANETS_IS_LOADING = 'PLANETS_IS_LOADING';
export const PLANETS_HAS_ERRORED = 'PLANETS_HAS_ERRORED';
export const PLANETS_FETCH_SUCCESS = 'PLANETS_FETCH_SUCCESS';

export const planetsIsLoading = (bool) => ({
  type: PLANETS_IS_LOADING,
  isLoading: bool,
});

export const planetsFetched = (planets) => ({
  type: PLANETS_FETCH_SUCCESS,
  data: planets.results,
});

export const planetsHasErrored = (bool, message) => ({
  type: PLANETS_HAS_ERRORED,
  hasErrored: { status: bool, message },
});

export const planetsFetchData = (url) => (dispatch) => {
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

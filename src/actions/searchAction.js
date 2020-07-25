export const SEARCH_PLANET = 'SEARCH_PLANET';

function searchPlanet(planets) {
  return {
    type: SEARCH_PLANET,
    planets,
  };
}

export default searchPlanet;

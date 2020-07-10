import { getCurrentStarsPlanet } from '../service/issAPI';

export const REQUEST_ISS_PLANET = 'REQUEST_ISS_PLANET';
export const RESEVED_PLANETS = 'RESEVED_PLANETS';


// Actions retornam objetos
const requestIssPlanet = () => ({
  type: REQUEST_ISS_PLANET,
});
// Actions retornam objetos
const receiveIssPlanetSuccess = (planets) => ({
  type: RESEVED_PLANETS,
  planets,
});
// Action Assincrono Creator Retorna uma Funcao Com o Thunk
export function fetchSTARSWARS() {
  return (dispatch) => {
    dispatch((requestIssPlanet));
    return getCurrentStarsPlanet()
      .then((planets) => dispatch(receiveIssPlanetSuccess(planets)))
  };
};

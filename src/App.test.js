/* eslint-disable no-await-in-loop */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import { Provider } from 'react-redux';
import 'mutationobserver-shim';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import testData from './testData';
import App from './App';
import reducer from './reducers';

const getStore = (initialState) => {
  if (!initialState) return createStore(reducer, applyMiddleware(thunk));
  return createStore(reducer, initialState, applyMiddleware(thunk));
};

const renderApp = (initialState) => {
  const store = getStore(initialState);

  return {
    ...render(
      <Provider store={store}>
        <App />
      </Provider>,
    ),
    store,
  };
};

const mockFetch = () => {
  const apiResponse = Promise.resolve({
    json: () => Promise.resolve(testData),
    ok: true,
  });
  global.fetch = jest.fn(() => apiResponse);
};

describe('1 - Fazer uma requisição para o endpoint /planets da API de Star Wars e preencher uma tabela com os dados retornados, com exceção dos da coluna residents', () => {
  beforeAll(mockFetch);
  beforeEach(cleanup);

  test('it calls SWAPI', () => {
    renderApp();
    expect(fetch).toHaveBeenCalled();
  });

  test('it uses SWAPI data', async () => {
    const { findByText, findAllByText } = renderApp();
    const planets = testData.results;
    for (let planetIndex = 0; planetIndex < planets.length; planetIndex += 1) {
      const name = await findByText(planets[planetIndex].name);
      const rotationPeriod = await findAllByText(planets[planetIndex].rotation_period);
      const orbitalPeriod = await findAllByText(planets[planetIndex].orbital_period);
      const diameter = await findAllByText(planets[planetIndex].diameter);
      const climate = await findAllByText(planets[planetIndex].climate);
      const gravity = await findAllByText(planets[planetIndex].gravity);
      const terrain = await findAllByText(planets[planetIndex].terrain);
      const surfaceWater = await findAllByText(planets[planetIndex].surface_water);
      const population = await findAllByText(planets[planetIndex].population);

      expect(name).toBeInTheDocument();
      expect(rotationPeriod.length).toBeGreaterThanOrEqual(1);
      expect(orbitalPeriod.length).toBeGreaterThanOrEqual(1);
      expect(diameter.length).toBeGreaterThanOrEqual(1);
      expect(climate.length).toBeGreaterThanOrEqual(1);
      expect(gravity.length).toBeGreaterThanOrEqual(1);
      expect(terrain.length).toBeGreaterThanOrEqual(1);
      expect(surfaceWater.length).toBeGreaterThanOrEqual(1);
      expect(population.length).toBeGreaterThanOrEqual(1);
    }
  });

  test('it renders a table with 13 columns', async () => {
    const { findAllByRole } = renderApp();
    const tableHeaders = await findAllByRole('columnheader');
    expect(tableHeaders).toHaveLength(13);
  });

  test('it renders a table with 11 rows', async () => {
    const { findAllByRole, findByText } = renderApp();
    await findByText(testData.results[0].name);
    const tableRows = await findAllByRole('row');
    expect(tableRows).toHaveLength(11);
  });
});

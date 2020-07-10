import { FILTERED_NAME, FILTERED_NUMERIC } from './types';

export const filterName = (name) => ({
  type: FILTERED_NAME,
  name,
});

export const filterNumeric = () => ({
  type: FILTERED_NUMERIC,
});

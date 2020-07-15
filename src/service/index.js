/* export default async function apiRequest(endpoint) {
  try {
    const URL = `https://swapi-trybe.herokuapp.com/api/${endpoint}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data
  } catch (error) {
    return error
  }
} */

export default function apiRequest(endpoint) {
  return fetch(
    `https://swapi-trybe.herokuapp.com/api/${endpoint}/`
  ).then((response) =>
    response
      .json()
      .then((data) =>
        response.ok ? Promise.resolve(data) : Promise.reject(data)
      )
  );
}

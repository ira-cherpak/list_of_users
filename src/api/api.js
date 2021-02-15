export const BASE_URL = 'https://swapi.dev/api/people/';

export const request = () => fetch(`${BASE_URL}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  })
  .then(result => result.results);

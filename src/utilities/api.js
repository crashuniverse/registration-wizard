const apiRoot = 'https://jsonplaceholder.typicode.com';

const post = (payload) => {
  const uri = apiRoot + '/users/';
  return fetch(uri, {
    method: 'POST',
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => data);
};

export { post };

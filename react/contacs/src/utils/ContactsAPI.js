const api = "test.php"

const headers = {
  'Accept': 'application/json'
}

export const getAll = () =>
  fetch("test.php", { headers })
    .then(res => res.json())
    // .then(data => data.contacts)

export const create = (body) =>
  fetch(`${api}/contacts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
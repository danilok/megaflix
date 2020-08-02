import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();

        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();

        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function create(values) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  })
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();

        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
}
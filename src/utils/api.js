class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getContent() {
    return fetch(this._url + '/api/data', {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const api = new Api({
  url: 'https://welbex-test.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
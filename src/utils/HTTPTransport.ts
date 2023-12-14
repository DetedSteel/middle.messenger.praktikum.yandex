/* eslint-disable @typescript-eslint/no-explicit-any */
const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

function queryStringify(data: Record<string, any>): string {
  return Object.entries(data).reduce(
    (acc, e, i) => (acc += `${i === 0 ? '?' : '&'}${e[0]}=${e[1]}`),
    ''
  );
}

export class HTTPTransport {
  get = (url: string, options: { timeout?: number } = {}) => {
    return this.request(url, { ...options, method: METHOD.GET }, options.timeout);
  };

  put = (url: string, options: { timeout?: number } = {}) => {
    return this.request(url, { ...options, method: METHOD.PUT }, options.timeout);
  };

  post = (url: string, options: { timeout?: number } = {}) => {
    return this.request(url, { ...options, method: METHOD.POST }, options.timeout);
  };

  delete = (url: string, options: { timeout?: number } = {}) => {
    return this.request(url, { ...options, method: METHOD.DELETE }, options.timeout);
  };

  request = (url: string, options: Record<string, any>, timeout = 5000) => {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (options.headers) {
        Object.entries(options.headers).forEach((e) => {
          if (typeof e[1] === 'string') {
            xhr.setRequestHeader(e[0], e[1]);
          }
        });
      }

      if (method === METHOD.GET && data) {
        url = url + queryStringify(data);
      }
      xhr.open(method, url);

      xhr.timeout = timeout;

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

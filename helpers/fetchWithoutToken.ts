const baseURL = process.env.NEXT_APP_API_URL;

interface IData {
  name?: string | undefined,
  email: string,
  password: string,
  birthDate?: Date | undefined,
}

export const fetchWithoutToken = (endpoint: string, data?: IData, method = 'GET') => {

  const url = `${baseURL}/${endpoint}`;

  if (method === 'GET') {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
    });
  }

};

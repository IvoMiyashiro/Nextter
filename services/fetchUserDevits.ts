import { ParsedUrlQuery } from 'querystring';

export const fetchUserDevits = async(query: ParsedUrlQuery) => {

  const baseUrl = process.env.NEXT_APP_API_URL as string;

  try {
    const resp = await fetch(`${baseUrl}/devits/${query}`);
    const body = await resp.json();

    return body.devits;
  } catch(error) {
    console.log(error);
  }
};

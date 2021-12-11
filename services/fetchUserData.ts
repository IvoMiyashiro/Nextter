import { ParsedUrlQuery } from 'querystring';

export const fetchUserData = async(query: ParsedUrlQuery) => {

  const baseUrl = process.env.NEXT_APP_API_URL as string;

  try {
    const resp = await fetch(`${baseUrl}/user/${query}`);
    const body = await resp.json();

    return body.user;
  } catch(error) {
    console.log(error);
  }
};

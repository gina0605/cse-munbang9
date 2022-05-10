import { parse, stringify } from 'qs';
import { useLocation } from 'react-router-dom';
import { api } from './plugins/axios';
import { tokenState } from './plugins/ridge';

export const useAuth = () => {
  const [token, setToken] = tokenState.use();
  const authenticated = token !== null;
  const signup = (data: any) =>
    api
      .post('/auth/signup', data)
      .then(({ data: { token } }) => setToken(token));
  const login = (data: any) =>
    api
      .post('/auth/login', data)
      .then(({ data: { token } }) => setToken(token));
  const logout = () => tokenState.reset();
  return { token, authenticated, signup, login, logout };
};

export function useQueryString(queryObject: any = {}) {
  const { search } = useLocation();
  const parsed = parse(search, { ignoreQueryPrefix: true });
  const searchObject = {
    page: '1',
    limit: '10',
    sort: { id: 'DESC' },
    ...parsed,
    ...queryObject,
  };
  return stringify(searchObject, { addQueryPrefix: true, encode: false });
}

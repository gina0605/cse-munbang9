import { ComponentType, FC } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../hooks';

export interface AuthRouteProps {
  path: string;
  component: ComponentType;
  redirectTo?: string;
  guestOnly?: boolean;
  guestOnlyRedirectTo?: string;
}

export const AuthRoute: FC<AuthRouteProps> = ({
  path,
  component: Component,
  redirectTo = '/login',
  guestOnly = false,
  guestOnlyRedirectTo = '/',
}) => {
  const { authenticated } = useAuth();

  return (
    <Route
      path={path}
      element={
        guestOnly && authenticated ? (
          <Navigate to={guestOnlyRedirectTo} />
        ) : !guestOnly && !authenticated ? (
          <Navigate to={redirectTo} />
        ) : (
          <Component />
        )
      }
    />
  );
};

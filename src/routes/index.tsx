import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hook/auth';
import { AppRoutes } from './app.stack.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const {user} = useAuth();

  return(
    <NavigationContainer>
      {user.id ? (
        <AppRoutes />
      ) : (
        <AuthRoutes />
      )}
    </NavigationContainer>
  )
}

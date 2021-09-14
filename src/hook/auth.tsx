import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from 'react';
import { api } from '../server/api';

interface User {
  id: string;
  email: string;
  name: string;
  diver_license: string;
  avatar: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credantials: SignInCredentials) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({children}: AuthProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState);

  async function signIn({email, password}: SignInCredentials) {
    const response = await api.post('/sessions', {
      email,
      password,
    });


    const {user, token} = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({user, token});
  }

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth,
}

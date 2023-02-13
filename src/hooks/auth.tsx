// Core dependencies
import  { useState, useEffect } from 'react';
import { createContext, useContext } from 'react';

// External services
import { api } from '../services/api';

// Custom components
import { SignOutModal } from '../components/SignOutModal';

interface SignInProps {
  email: string;
  password: string;
}

interface dataProps {
  user: {
    id: number;
    admin: boolean;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
  };
  token: string;
}

interface GlobalContent {
  signIn: ({ email, password }: SignInProps) => Promise<string>
  signOut: () => void;
  user: dataProps['user'] | undefined,
}

const AuthContext = createContext<GlobalContent | null>(null);

function AuthProvider({ children }: any): JSX.Element {
  const [data, setData] = useState<dataProps | undefined>();

  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [userWantsToSignOut, setUserWantsToSignOut] = useState<boolean>(false);

  const [openCounter, setOpenCounter] = useState<number>(0);

  async function signIn({ email, password }: SignInProps) {
    
    function delay(time: number) {
      return new Promise(resolve => setTimeout(resolve, time));
    }

    try {
      await delay(1000);
      
      const response = await api.post('/sessions', { email, password });

      const { user, token }: dataProps = response.data;
    
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      localStorage.setItem('@food-explorer:token', token);

      localStorage.setItem('@food-explorer:user', JSON.stringify(user));

      setData({ user, token });
      setUserLoggedIn(true);

    } catch(error: any) {
      if (error.response) {
        return error.response.data.message; 

      } else {
        return 'Servidor indisponível. Tente novamente mais tarde.';
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@food-explorer:user');
    localStorage.removeItem('@food-explorer:token');

    setData(undefined);
    setUserLoggedIn(false);
  }

  function tryToSignOut() {
    const modal = document.querySelector('dialog#confirm-sign-out') as HTMLDialogElement;

    if (modal && !modal.open) {
      modal?.showModal();
      setOpenCounter(prevState => prevState + 1);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@food-explorer:token');
    const user = localStorage.getItem('@food-explorer:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  useEffect(() => {

    if (userLoggedIn) {
      const interval = setInterval(() => {
        tryToSignOut();
      }, 900000);
      return () => clearInterval(interval);
    }

  }, [userLoggedIn]);

  useEffect(() => {

    if (userWantsToSignOut) {
      signOut();
      setUserWantsToSignOut(false);
    }
    
  }, [userWantsToSignOut]);

  return (
    <>
      <AuthContext.Provider 
        value={{
          signIn,
          signOut,
          user: data?.user
        }}
      >
        {children}
      </AuthContext.Provider>
      <SignOutModal
        name='confirm-sign-out'
        message='O sistema irá te desconectar por segurança, caso você não confirme que deseja continuar. Deseja continuar?'
        userDecisionSetter={setUserWantsToSignOut}
        modalOpenTracker={openCounter}
      />
    </>
  );
}

function useAuth(): GlobalContent {
  const context = useContext(AuthContext) as GlobalContent;
  return context;
}

export { AuthProvider, useAuth };
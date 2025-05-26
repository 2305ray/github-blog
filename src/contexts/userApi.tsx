import { api } from "../lib/axios";
import {
  createContext,
  useCallback,
  useState,
  type ReactNode,
} from "react";

interface User {
  //oq vai receber da api
  login: string;
  name: string;
  avatar_url: string;
  followers: number;
  bio: string;
  company: string;
  html_url: string;
}

interface UserContextType {
  user: User | null;
  fetchUser: (username: string) => Promise<void>;
}

interface UserProviderProps {
  children: ReactNode;
}
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = useCallback(async (query: string) => {
    const response = await api.get(`/users/${query}`);
    setUser(response.data);
  }, []);

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
}

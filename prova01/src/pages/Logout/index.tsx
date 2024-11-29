// src/context/UserContext.tsx
import { createContext, ReactNode, useState } from "react";

type UserContextType = {
  setAuthTime: (time: number) => void;
  setExp: (exp: number) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhotoURL: (photoURL: string) => void;
  isSessionValid: () => boolean;
};

export const UserContext = createContext<UserContextType>({
  setAuthTime: () => {},
  setExp: () => {},
  setName: () => {},
  setEmail: () => {},
  setPhotoURL: () => {},
  isSessionValid: () => false,
});

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [authTime, setAuthTime] = useState<number>(0);
  const [exp, setExp] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [photoURL, setPhotoURL] = useState<string>("");

  const isSessionValid = () => {
    const currentTime = new Date().getTime();
    return exp > currentTime;
  };

  return (
    <UserContext.Provider
      value={{
        setAuthTime,
        setExp,
        setName,
        setEmail,
        setPhotoURL,
        isSessionValid,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

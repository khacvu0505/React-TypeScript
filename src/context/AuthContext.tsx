import { createContext, ReactNode, useReducer } from "react";
import { authReducer, AuthState } from "../reducers/AuthReducer";
import { AuthActionType } from "../reducers/Types";

interface AuthContextProps {
  children: ReactNode;
}
interface AuthContextDefault {
  authInfo: AuthState;
  toggleAuth: (userName: string) => void;
}

interface AuthContextDefaultData {
  isAuthenticated: boolean;
  userName: string;
}

const authDefaultData: AuthContextDefaultData = {
  isAuthenticated: false,
  userName: "",
};

export const AuthContext = createContext({
  authInfo: authDefaultData,
  toggleAuth: (userName: string) => {},
});

const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [authInfo, dispatch] = useReducer(authReducer, authDefaultData);

  const toggleAuth = (userName: string) =>
    dispatch({ type: AuthActionType.TOGGLE_AUTH, payload: userName });

  const authContextData = {
    authInfo,
    toggleAuth,
  };
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

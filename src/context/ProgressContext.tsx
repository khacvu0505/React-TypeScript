import { createContext, ReactNode } from "react";

interface ProgressContextProviderProps {
  children: ReactNode;
}

interface ProgressContextDefault {
  lastTime: string;
  status: string;
}
const profressDefault = {
  lastTime: "14/06/2022",
  status: "In Progress",
};

export const ProgressContext =
  createContext<ProgressContextDefault>(profressDefault);

const ProgressContextProvider = ({
  children,
}: ProgressContextProviderProps) => {
  return (
    <ProgressContext.Provider value={profressDefault}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContextProvider;

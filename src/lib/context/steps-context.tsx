"use client";
import React, {
  createContext,
  ReactNode,
  useState,
  FC,
  useContext,
} from "react";

// Define the context type
interface StepsContextType {
  buy: string;
  step: number;
  setBuy: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const defaultSteps = {
  buy: "", // initial value
  step: 1,
  setBuy: () => {}, // empty function as default
  setStep: () => {}, // empty function as default
};

// Create the context with the default value
const StepsContext = createContext<StepsContextType>(defaultSteps);

interface StepsProviderProps {
  children: ReactNode;
}

export const StepsProvider: FC<StepsProviderProps> = ({ children }) => {
  const [buy, setBuy] = useState<string>("bid-offer");
  const [step, setStep] = useState<number>(1);

  return (
    <StepsContext.Provider value={{ buy, setBuy, step, setStep }}>
      {children}
    </StepsContext.Provider>
  );
};

export function useSteps() {
  const context = useContext(StepsContext);

  if (context == undefined)
    throw new Error("out of the header context boundery ");
  return context;
}

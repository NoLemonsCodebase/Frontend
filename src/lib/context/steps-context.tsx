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
  name: string;
  phone: string;
  finalPrice: string;
  curStep: number;
  setCurStep: React.Dispatch<React.SetStateAction<number>>;
  setBuy: React.Dispatch<React.SetStateAction<string>>;

  setName: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setFinalPrice: React.Dispatch<React.SetStateAction<string>>;
}

const defaultSteps = {
  buy: "", // initial value
  curStep: 1,
  name: "",
  phone: "",
  finalPrice: "",
  setBuy: () => {},
  setCurStep: () => {},
  setName: () => {},
  setPhone: () => {},
  setFinalPrice: () => {},
};

// Create the context with the default value
const StepsContext = createContext<StepsContextType>(defaultSteps);

interface StepsProviderProps {
  children: ReactNode;
}

export const StepsProvider: FC<StepsProviderProps> = ({ children }) => {
  //===============
  const [buy, setBuy] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [finalPrice, setFinalPrice] = useState<string>("");
  const [curStep, setCurStep] = useState<number>(1);

  return (
    <StepsContext.Provider
      value={{
        buy,
        setBuy,
        curStep,
        setCurStep,
        name,
        setName,
        phone,
        setPhone,
        finalPrice,
        setFinalPrice,
      }}
    >
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

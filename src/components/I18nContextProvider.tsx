import React, { createContext, useContext, FC, PropsWithChildren } from "react";

const I18nContext = createContext({});

interface ContextValue {
  dict: any;
}

export const I18nContextProvider: FC<PropsWithChildren<{ dict: any }>> = ({
  children,
  dict,
}) => {
  return <I18nContext.Provider value={dict}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);

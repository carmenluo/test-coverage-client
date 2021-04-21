import React, { Children, createContext, FC, useContext } from "react";
import { ReportStore } from "../store/report-store";

const StoreContext = createContext<ReportStore>(new ReportStore());

const StoreProvider: FC<{ store: ReportStore }> = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useStore = () => {
  return useContext(StoreContext);
};

export { useStore, StoreProvider };

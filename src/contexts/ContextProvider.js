import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initState = {
  chat: false,
  cart: false,
  userProfile: false,
  notifications: false,
};
function ContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <ContextProvider.Provider value={{ activeMenu }}>
      {children}
    </ContextProvider.Provider>
  );
}

export default ContextProvider;
export const useStateContext = () => useContext(StateContext);

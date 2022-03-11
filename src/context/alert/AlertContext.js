import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export function AlertContextProvider({ children }) {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    console.log("alert set");
    dispatch({
      type: "SetAlert",
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({ type: "RemoveAlert" });
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}
export default AlertContext;

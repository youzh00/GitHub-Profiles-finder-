import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const githubURL = "https://api.github.com";
const githubTOKEN = "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";

////////////////////////

export function GithubProvider({ children }) {
  const initialState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${githubURL}/users`, {
      headers: {
        Authorization: `token: ${githubTOKEN}`,
      },
    });
    const data = await response.json();
    dispatch({
      type: "GetUsers",
      payload: data,
    });
  };

  const setLoading = () => dispatch({ type: "setLoading" });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubContext;

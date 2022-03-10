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
  const SearchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });
    setLoading();
    const response = await fetch(`${githubURL}/search/users?${params}`, {
      headers: {
        Authorization: `token: ${githubTOKEN}`,
      },
    });
    const { items } = await response.json();
    dispatch({
      type: "GetUsers",
      payload: items,
    });
  };
  const handleClearContext = () => dispatch({ type: "ClearItems" });

  const setLoading = () => dispatch({ type: "setLoading" });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        SearchUsers,
        handleClearContext,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubContext;

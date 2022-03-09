import { createContext, useState } from "react";

const GithubContext = createContext();

const githubURL = "https://api.github.com";
const githubTOKEN = "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";

export function GithubProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${githubURL}/users`, {
      headers: {
        Authorization: `token: ${githubTOKEN}`,
      },
    });
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubContext;

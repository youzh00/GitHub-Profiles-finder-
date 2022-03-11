const githubURL = "https://api.github.com";
const githubTOKEN = "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";

//////Search for users
export const SearchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await fetch(`${githubURL}/search/users?${params}`, {
    headers: {
      Authorization: `token: ${githubTOKEN}`,
    },
  });
  const { items } = await response.json();
  return items;
};

/////// get user data
export const getUser = async (username) => {
  const response = await fetch(`${githubURL}/users/${username}`, {
    headers: {
      Authorization: `token: ${githubTOKEN}`,
    },
  });
  if (response.status === 404) {
    window.location("/notfound");
  }
  const data = await response.json();
  return data;
};

//////// get User repositories
export const getUserRepos = async (username) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const response = await fetch(
    `${githubURL}/users/${username}/repos?${params}`,
    {
      headers: {
        Authorization: `token: ${githubTOKEN}`,
      },
    }
  );
  if (response.status === 404) {
    window.location("/notfound");
  }
  const data = await response.json();
  return data;
};

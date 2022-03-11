const githubReducer = (state, action) => {
  switch (action.type) {
    case "GetUsers":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "setLoading":
      return {
        ...state,
        loading: false,
      };
    case "ClearItems":
      return {
        ...state,
        users: [],
      };
    case "GetUser":
      return {
        ...state,
        user: action.payload,
      };
    case "GetUserRepos":
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
};

export default githubReducer;

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
    default:
      return state;
  }
};

export default githubReducer;

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
    default:
      return state;
  }
};

export default githubReducer;

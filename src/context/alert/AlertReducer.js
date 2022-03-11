export default function alertReducer(state, action) {
  switch (action.type) {
    case "SetAlert":
      return action.payload;
    case "RemoveAlert":
      return null;
    default:
      return state;
  }
}

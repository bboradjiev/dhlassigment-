const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [{ ...state, action }];
    case "REMOVE_FAVORITE":
      return [{ ...state, action }];
    default:
      return state;
  }
};

export default reducer;

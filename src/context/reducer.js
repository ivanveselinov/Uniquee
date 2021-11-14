export const initialState = {
  user: {},
  color: "blue",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "user":
      return {
        ...state,
        user: action.payload,
      };

    case "color":
      return {
        ...state,
        color: action.payload,
      };

    case "reset":
      return {
        ...state,
        color: "black",
      };

    default:
      return;
  }
};

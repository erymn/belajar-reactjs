const initialState = {
  id: "",
  name: "",
  email: "",
  address: "",
};

// User Type
// -----------------------------
// USER_LOGGED_IN
// USER_LOGGED_OUT
// USER_PAID
// -----------------------------
// INGA INGA...
// ...state: akan repopulate initialState

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

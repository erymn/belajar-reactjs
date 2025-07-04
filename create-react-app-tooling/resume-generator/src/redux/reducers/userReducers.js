// 1. initial state
const initialState = {
  id: "",
  name: "",
  email: "",
};

// action payload: {projects: 'Resume Project', type: 'UPDATE_RESUME_INPUT'}

// 2. switch case - action
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// 3. export

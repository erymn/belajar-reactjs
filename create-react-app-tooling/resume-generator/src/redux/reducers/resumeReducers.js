// 1. initial state
const initialState = {
  inputs: {
    contactInformation: "",
    technicalSkills: "",
    professionalExperience: "",
    projects: "",
    education: "",
  },
};

// action payload: {projects: 'Resume Project', type: 'UPDATE_RESUME_INPUT'}

// 2. switch case - action
export const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_RESUME_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

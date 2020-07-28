import { FETCH_USER } from "../types";

const INITIAL_STATE = {
  user: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  // console.log("authReducer", action);
  switch (action.type) {
    case FETCH_USER: {
      return { ...state, user: action.user || false };
    }
    default: {
      return state;
    }
  }
};

export default reducer;

import { UPDATE_REQUEST_STATUS } from "../actions/action_types";
import usersReducer from "./users";

const initialState = {
  users: {
    values: [{ id: 1, name: "TEST USER" }],
  },
  movies: {},
  requestStatus: "idle", // global request state
};

const rootReducer = (state = initialState, action) => {
  state = { ...state, users: usersReducer(state.users, action) };
  switch (action.type) {
    case UPDATE_REQUEST_STATUS:
      return { ...state, requestStatus: action.payload };
    default:
      return state;
  }
};

export default rootReducer;

import { UPDATE_REQUEST_STATUS } from "../actions/action_types";
import usersReducer from "./users";
import moviesReducer from "./movies";

const initialState = {
  users: {
    values: [],
  },
  movies: {
    allValues: [],
  },
  requestStatus: "idle", // global request state
};

const rootReducer = (state = initialState, action) => {
  state = {
    ...state,
    users: usersReducer(state.users, action),
    movies: moviesReducer(state.movies, action),
  };
  switch (action.type) {
    case UPDATE_REQUEST_STATUS:
      return { ...state, requestStatus: action.payload };
    default:
      return state;
  }
};

export default rootReducer;

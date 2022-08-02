import { UPDATE_ALL_MOVIES } from "../actions/action_types";

const Movies = (state, action) => {
  switch (action.type) {
    case UPDATE_ALL_MOVIES:
      return { ...state, allValues: action.payload };
    default:
      return state;
  }
};

export default Movies;

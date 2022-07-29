import { UPDATE_USERS } from "../actions/action_types";

const Users = (state, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return { ...state, values: action.payload };
    default:
      return state;
  }
};

export default Users;

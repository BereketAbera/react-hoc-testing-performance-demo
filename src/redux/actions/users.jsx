const { UPDATE_REQUEST_STATUS, UPDATE_USERS } = require("./action_types");

/**
 *
 * @param {*} params request params
 * @returns
 */
export const fetchUsers = (params) => async (dispatch) => {
  dispatch({ type: UPDATE_REQUEST_STATUS, payload: "loading" });
  let res = await fetch("http://localhost:5000/users");
  let resJson = await res.json();
  // timeout to simulate real request loading...
  setTimeout(async () => {
    dispatch({ type: UPDATE_USERS, payload: resJson });
    dispatch({ type: UPDATE_REQUEST_STATUS, payload: "resolved" });
  }, 2000);
};

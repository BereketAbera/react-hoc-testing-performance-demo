const { UPDATE_REQUEST_STATUS, UPDATE_ALL_MOVIES } = require("./action_types");

/**
 *
 * @param {*} params request params
 * @returns
 */
export const fetchAllMovies = (params) => async (dispatch) => {
  dispatch({ type: UPDATE_REQUEST_STATUS, payload: "loading" });
  let res = await fetch("http://localhost:5000/movies");
  let resJson = await res.json();
  // timeout to simulate real request loading...
  setTimeout(async () => {
    dispatch({ type: UPDATE_ALL_MOVIES, payload: resJson });
    dispatch({ type: UPDATE_REQUEST_STATUS, payload: "resolved" });
  }, 2000);
};

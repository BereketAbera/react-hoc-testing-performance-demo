import { useSelector } from "react-redux";
import Movies from "./components/Movies";
import Users from "./components/Users";
import withData from "./hoc/withData";
import withErrorBoundary from "./hoc/withErrorBoundary";
import { fetchAllMovies } from "./redux/actions/movies";
import { fetchUsers } from "./redux/actions/users";

const UserComponent = withErrorBoundary(
  withData(Users, fetchUsers, {}, "users", "values")
);
const MoviesComponent = withErrorBoundary(
  withData(Movies, fetchAllMovies, {}, "movies", "allValues")
);

function App() {
  const requestStatus = useSelector((state) => state.requestStatus);

  return (
    <div className="p-4 mx-auto max-w-2xl">
      {requestStatus === "loading" && (
        <h1 className="text-red-700">Loading...</h1>
      )}
      <MoviesComponent />
    </div>
  );
}

export default App;

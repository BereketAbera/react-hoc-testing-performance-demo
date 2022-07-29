import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchUsers } from "./redux/actions/users";

function App() {
  const users = useSelector((state) => state.users);
  const requestStatus = useSelector((state) => state.requestStatus);

  const dispatch = useDispatch();

  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers({ sort: "true" }));
  }, []);

  const renderUsers = () => {
    return users?.values?.map((user) => {
      return <li>{`${user.first_name} ${user.last_name}`}</li>;
    });
  };

  return (
    <div className="p-4 mx-auto max-w-lg">
      {requestStatus === "loading" && (
        <h1 className="text-red-700">Loading...</h1>
      )}
      {requestStatus !== "loading" && <ul> {renderUsers()}</ul>}
    </div>
  );
}

export default App;

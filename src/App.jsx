import Users from "./components/Users";
import withData from "./hoc/withData";
import withErrorBoundary from "./hoc/withErrorBoundary";
import { fetchUsers } from "./redux/actions/users";

const UserComponent = withErrorBoundary(withData(Users, fetchUsers, {}));

function App() {
  return (
    <div className="p-4 mx-auto max-w-lg">
      <UserComponent />
    </div>
  );
}

export default App;

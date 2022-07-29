function Users({ values = [], requestStatus }) {
  const renderUsers = () => {
    // throw new Error("Error from render users func");
    return values?.map((user) => {
      return <li>{`${user.first_name} ${user.last_name}`}</li>;
    });
  };

  return (
    <div>
      {requestStatus === "loading" && (
        <h1 className="text-red-700">Loading...</h1>
      )}
      {requestStatus !== "loading" && <ul> {renderUsers()}</ul>}
    </div>
  );
}

export default Users;

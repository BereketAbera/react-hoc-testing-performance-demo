function Users({ values = [], requestStatus }) {
  const renderUsers = () => {
    return values?.map((user) => {
      return <li>{`${user.first_name} ${user.last_name}`}</li>;
    });
  };

  return <div>{requestStatus !== "loading" && <ul> {renderUsers()}</ul>}</div>;
}

export default Users;

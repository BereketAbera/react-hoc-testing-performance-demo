const { useEffect } = require("react");
const { useSelector, useDispatch } = require("react-redux");

const withData = (WrappedComponent, fetchDataFunc, params = {}) => {
  const NewComponent = () => {
    const values = useSelector((state) => state.users?.values);
    const requestStatus = useSelector((state) => state.requestStatus);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchDataFunc(params));
    }, []);

    return (
      <WrappedComponent
        values={values}
        requestStatus={requestStatus}
      ></WrappedComponent>
    );
  };
  return NewComponent;
};

export default withData;

const { useEffect } = require("react");
const { useSelector, useDispatch } = require("react-redux");

const withData = (
  WrappedComponent,
  fetchDataFunc,
  params = {},
  key1,
  key2,
  key3
) => {
  const NewComponent = () => {
    const values = useSelector((state) => {
      if (key1 && key2 && key3) return state[key1][key2][key3];
      else if (key1 && key2) return state[key1][key2];
      else return state[key1];
    });
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

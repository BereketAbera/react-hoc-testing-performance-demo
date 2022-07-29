import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const withErrorBoundary = (WrappedComponent) => {
  const NewComponent = () => {
    return (
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={(reset) => {
          console.log(reset, "from reset func");
        }}
      >
        <WrappedComponent />
      </ErrorBoundary>
    );
  };

  return NewComponent;
};

export default withErrorBoundary;

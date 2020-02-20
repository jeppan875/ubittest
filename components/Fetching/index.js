import LoadingIndicator from "components/Loaders";

export default ({ children, fetching, error }) => {
  if (error) {
    return <div>Something went wrong</div>;
  } else {
    return fetching ? <LoadingIndicator /> : children;
  }
};

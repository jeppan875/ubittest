import Error from "components/Error";
import LoadingIndicator from "components/Loaders";

export default ({ children, fetching, error, errMsg }) => {
  if (error) {
    return <Error err={errMsg} />;
  } else {
    return fetching ? <LoadingIndicator /> : children;
  }
};

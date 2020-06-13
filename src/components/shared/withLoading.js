import React from "react";
import Loading from "./Loading";

function withLoading(Component) {
  return function withLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="my-3">
        <Loading color="#333333" />
      </div>
    );
  };
}
export default withLoading;

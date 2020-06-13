import React from "react";
import Navigation from "../../components/shared/Navigation";

const DashboardLayout = (props) => {
  return (
    <>
      <Navigation />
      <div className="py-0 px-4">{props.children}</div>
    </>
  );
};

export default DashboardLayout;

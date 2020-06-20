import React from "react";
import Navigation from "../../components/shared/Navigation";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import mock from "../../config/mock";
import { eventsData } from "../../api/demo";

const DashboardLayout = (props) => {
  const { setAuth } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(mock.user);
    }

    if (!localStorage.getItem("events")) {
      localStorage.setItem("events", JSON.stringify(eventsData));
    }
  });

  return (
    <>
      <Navigation />
      <div className="py-0 px-4">{props.children}</div>
    </>
  );
};

export default DashboardLayout;

import React, { useContext } from "react";
import MarketingSide from "../components/MarketingSide";
import MarketingHead from "../components/MarketingHead";
import { UseAllContext } from "../App";
import { Outlet, useLocation } from "react-router-dom";

const Marketing = () => {
  const {} = useContext(UseAllContext);
  const location = useLocation();

  const hiddenPaths = [
    "/marketing",
    "/marketing/stock",
    "/marketing/banner",
    "/marketing/review",
  ];
  return (
    <div className="flex">
      <MarketingSide />
      <div className="flex-grow">
        {hiddenPaths.includes(location.pathname) ? <MarketingHead /> : <></>}
        <div
          className={`${!hiddenPaths.includes(location.pathname) ? "p-0" : "px-6 pt-6"}`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Marketing;

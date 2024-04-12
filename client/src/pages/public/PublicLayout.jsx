import { Navigation, TopHeader } from "@/components";
import withRouter from "@/hocs/withRouter";
import clsx from "clsx";
import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = ({ location }) => {
  return (
    <main>
      <TopHeader />
      <Navigation />
      <div className={clsx(location.pathname === "/" ? "pt-0" : "pt-[232px]")}>
        <Outlet />
      </div>
    </main>
  );
};
export default withRouter(PublicLayout);

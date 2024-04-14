import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../commons/Button";
import { navigation } from "@/utils/contants";
import clsx from "clsx";
import withRouter from "@/hocs/withRouter";
import { twMerge } from "tailwind-merge";
import { useUserStore } from "@/store/useUserStore";
import { useAppStore } from "@/store/useAppStore";
import { Login } from "..";

const Navigation = ({ location, navigate }) => {
  const { token } = useUserStore();
  const { setModal } = useAppStore();
  return (
    <div
      className={twMerge(
        clsx(
          "w-full bg-transparent flex items-center justify-between fixed z-50 top-20 px-24 py-6",
          location.pathname !== "/" && "bg-white"
        )
      )}
    >
      <div>
        <Link to="/">
          <img src="/logo.png" alt="logo" className="w-32 object-contain" />
        </Link>
      </div>
      <div
        className={clsx(
          "flex items-center gap-6",
          location.pathname === "/" ? "text-main-100" : "text-gray-700  "
        )}
      >
        {navigation.map((nav) => (
          <NavLink
            key={nav.id}
            to={nav.path}
            className={({ isActive }) =>
              clsx(
                isActive && " font-semibold",
                location.pathname === "/" ? "text-main-100" : "text-gray-900"
              )
            }
          >
            {nav.text}
          </NavLink>
        ))}
        {!token ? (
          <Button
            className={twMerge(
              clsx(
                location.pathname === "/" &&
                  "bg-transparent border-main-100 border "
              )
            )}
            onOk={() => setModal(true, <Login />)}
          >
            Sig In
          </Button>
        ) : (
          <Button
            className={twMerge(
              clsx(
                location.pathname === "/" &&
                  "bg-transparent border-main-100 border "
              )
            )}
          >
            Add Listing
          </Button>
        )}
      </div>
    </div>
  );
};
export default withRouter(Navigation);

import withRouter from "@/hocs/withRouter";
import clsx from "clsx";
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
const TopHeader = ({ location }) => {
  return (
    <div
      className={twMerge(
        clsx(
          "w-full h-[85px] bg-transparent text-white border-b border-main-400 fixed z-50 top-0 px-24 py-6 flex items-center justify-between",
          location.pathname !== "/" && "bg-main-700"
        )
      )}
    >
      <span className="flex items-center gap-2">
        <AiOutlineMail />
        <span>
          <span className="">Email us at: </span>
          <span className="text-gray-300">example@gmail.com</span>
        </span>
      </span>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-6 text-gray-300">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </div>
        <div className="flex items-center pl-8 border-l border-main-400">
          <span className="flex items-center gap-2">
            <AiOutlinePhone />
            <span className="text-gray-300">0xx-xxxx-xxx</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default withRouter(TopHeader);

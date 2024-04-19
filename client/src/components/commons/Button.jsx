import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { ImSpinner2 } from "react-icons/im";
export default function Button({
  children,
  className,
  onOk,
  type = "button",
  disable = false,
}) {
  return (
    <button
      type={type}
      onClick={onOk}
      className={twMerge(
        clsx(
          "px-4 py-3 text-white bg-main-700 rounded-md flex justify-center gap-3",
          className
        ),
        disable && "opacity-50"
      )}
      disabled={disable}
    >
      {disable && (
        <span className="animate-spin ">
          <ImSpinner2 />
        </span>
      )}
      {children}
    </button>
  );
}

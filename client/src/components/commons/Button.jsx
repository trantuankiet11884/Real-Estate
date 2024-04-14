import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export default function Button({ children, className, onOk, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onOk}
      className={twMerge(
        clsx("px-4 py-3 text-white bg-main-700 rounded-md", className)
      )}
    >
      {children}
    </button>
  );
}

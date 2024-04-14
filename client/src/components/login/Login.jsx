import clsx from "clsx";
import React, { useState } from "react";

export default function Login() {
  const [varriant, setVarriant] = useState("LOGIN");
  return (
    <div
      className="bg-white rounded-md px-6 py-8 flex flex-col items-center gap-6"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="text-3xl font-semibold">Welcom to RE</h1>
      <div className="flex items-center justify-between py-4 gap-6 w-full border-b">
        <span
          onClick={() => setVarriant("LOGIN")}
          className={clsx(
            varriant === "LOGIN" && "border-b-2 border-main-700",
            "cursor-pointer"
          )}
        >
          Login
        </span>
        <span
          className={clsx(
            varriant === "REGISTER" && "border-b-2 border-main-700",
            "cursor-pointer"
          )}
          onClick={() => setVarriant("REGISTER")}
        >
          New Acccount
        </span>
      </div>
    </div>
  );
}

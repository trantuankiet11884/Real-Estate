import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Button, InputForm } from "..";
import { useForm } from "react-hook-form";

export default function Login() {
  const [varriant, setVarriant] = useState("LOGIN");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    reset();
  }, [varriant]);
  return (
    <div
      className="bg-white rounded-md px-6 py-8 flex flex-col items-center gap-6 w-[400px]"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="text-3xl font-semibold">Welcom to RE</h1>
      <div className="flex items-center justify-center py-4 gap-6 w-full border-b">
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
      <form className="flex flex-col gap-4 w-full px-4">
        {varriant === "REGISTER" && (
          <InputForm
            register={register}
            id={"name"}
            label={"FullName"}
            inputClass="rounded-md"
            placeholder="FullName"
            errors={errors}
            validate={{ required: "Must Be Filled!" }}
          />
        )}
        <InputForm
          register={register}
          id={"phone"}
          label={"Phone Number"}
          inputClass="rounded-md"
          placeholder=" Phone Number"
          validate={{ required: "Must Be Filled!" }}
          errors={errors}
        />
        <InputForm
          register={register}
          id={"password"}
          label={"Password"}
          inputClass="rounded-md"
          placeholder=" Password"
          type="password"
          validate={{ required: "Must Be Filled!" }}
          errors={errors}
        />
        <Button className="py-2 my-2" onOk={handleSubmit(onSubmit)}>
          {varriant === "LOGIN" ? "Login" : "Register"}
        </Button>
        <span className="text-center cursor-pointer text-main-500 hover:underline">
          Forgot Your Password
        </span>
      </form>
    </div>
  );
}

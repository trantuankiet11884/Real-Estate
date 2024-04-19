import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Button, InputForm, InputRadio } from "..";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { apiLogin, apiRegister } from "@/apis/auth";
import withRouter from "@/hocs/withRouter";
import { useAppStore } from "@/store/useAppStore";
console.log(
  Object.entries({
    foo: 0,
    bar: 1,
  }).filter(([key]) => !["foo"].includes(key))
);
const Login = ({ navigate }) => {
  const { setModal } = useAppStore();
  const [varriant, setVarriant] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (varriant === "REGISTER") {
      setIsLoading(true);
      const res = await apiRegister(data);
      toggleLoading(false);
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Congrats !!!",
          text: res.message,
          showConfirmButton: true,
          confirmButtonText: "Go Login",
        }).then(({ isConfirmed }) => {
          if (isConfirmed) {
            setVarriant("LOGIN");
          }
        });
      } else {
        toast.error(res.message);
      }
    }

    if (varriant === "LOGIN") {
      const { name, role, ...payload } = data;
      const res = await apiLogin(payload);
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Congrats !!!",
          text: res.message,
          showConfirmButton: true,
          confirmButtonText: "OK !",
        }).then(({ isConfirmed }) => {
          if (isConfirmed) {
            setModal(false, null);
          }
        });
      } else {
        toast.error(res.message);
      }
    }
  };
  useEffect(() => {
    reset();
  }, [varriant]);
  return (
    <div
      className="bg-white rounded-md px-6  flex flex-col items-center gap-6 w-[400px] h-full"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="text-3xl font-semibold">Welcom to RE</h1>
      <div className="flex items-center gap-6  justify-center  w-full border-b">
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
      <form className="flex flex-col gap-2 w-full  px-4">
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
          validate={{
            required: "Must Be Filled!",
            pattern: {
              value: /(0[3|5|7|8|9])+([0-9]{8}\b)/,
              message: "Phone Number Start 0 and 10 Digits",
            },
          }}
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
        {varriant === "REGISTER" && (
          <InputRadio
            register={register}
            id={"role"}
            label={"Type Account"}
            inputClass="rounded-md cursor-pointer flex"
            validate={{ required: "Must Be Filled!" }}
            errors={errors}
            options={[
              { label: "User", value: "USER" },
              { label: "Agent", value: "AGENT" },
            ]}
          />
        )}
        <Button className="py-2 my-2" onOk={handleSubmit(onSubmit)}>
          {varriant === "LOGIN" ? "Login" : "Register"}
        </Button>
        <span className="text-center cursor-pointer text-main-500 hover:underline">
          Forgot Your Password
        </span>
      </form>
    </div>
  );
};

export default withRouter(Login);

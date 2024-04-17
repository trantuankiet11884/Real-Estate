import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function InputForm({
  style = "form-input",
  containerClass,
  label,
  id,
  type = "text",
  register,
  errors,
  inputClass,
  validate,
  placeholder,
}) {
  return (
    <div className={twMerge(clsx("flex flex-col gap-2 ", containerClass))}>
      {label && (
        <label className="font-medium text-main-700" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={twMerge(clsx(style, "placeholder:text-sm", inputClass))}
        {...register(id, validate)}
        placeholder={placeholder}
      />
      {errors && errors[id] && (
        <small className="text-red-500 text-xs">{errors[id]?.message}</small>
      )}
    </div>
  );
}

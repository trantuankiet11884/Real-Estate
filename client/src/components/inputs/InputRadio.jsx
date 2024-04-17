import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function InputRadio({
  style = "form-radio",
  containerClass,
  id,
  register,
  errors,
  inputClass,
  validate,
  placeholder,
  label,
  options = [],
}) {
  return (
    <div className={twMerge(clsx("flex flex-col gap-2 ", containerClass))}>
      {label && (
        <label className="font-medium text-main-700" htmlFor={id}>
          {label}
        </label>
      )}
      {options.map((op) => (
        <div key={op.value} className="flex items-center gap-2 ">
          <input
            type="radio"
            name={id}
            id={op.value}
            value={op.value}
            className={twMerge(clsx(style, "placeholder:text-sm", inputClass))}
            {...register(id, validate)}
            placeholder={placeholder}
          />

          <label className="cursor-pointer " htmlFor={op.value}>
            {op.label}
          </label>
        </div>
      ))}
      {errors && errors[id] && (
        <small className="text-red-500 text-xs">{errors[id]?.message}</small>
      )}
    </div>
  );
}

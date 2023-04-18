import React from "react";
interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "number" | "date" | "text" | "email" | "password" | "time" | "file";
  label?: string
  labelClassName?: string
  className?: string
  endIcon?: React.ReactNode
}

const Input = ({ type = "text", label, labelClassName, className, endIcon, ...props }: IInput) => {
  return (
    <div className={`grid text-start gap-y-1 ${className}`}>
      {
        label &&
        <label className={`text-sm font-semibold text-white ${labelClassName}`}>{label}</label>
      }
      <div className=" flex items-center border border-gray-300 rounded-md  focus:border-primary shadow-md bg-white ">
        <input  {...props} type={type} className={` w-full outline-none   p-2`} />
        {
          endIcon &&
          endIcon
        }
      </div>
    </div>)
};

export default Input;

import { NextPage } from "next"
import React, { Dispatch, SetStateAction, useState } from "react"

interface IInputProps {
  flex?: boolean
  disabled?: boolean
  label: string
  type?: string
  placeholder?: string
  setValue: Dispatch<SetStateAction<any>>
  defaultVal?: any
}

const Input: NextPage<IInputProps> = ({
  flex,
  disabled,
  label,
  type,
  placeholder,
  setValue,
  defaultVal,
}) => {
  return (
    <div
      className={
        flex
          ? "my-4 flex gap-4 items-center text-textColor"
          : "my-8 text-textColor"
      }
    >
      <p
        className={
          flex ? "w-[130px] text-xl font-semibold" : "text-xl font-semibold"
        }
      >
        {label}
      </p>
      <input
        value={defaultVal && defaultVal}
        disabled={disabled && disabled}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        type={type ? `${type}` : "text"}
        className="border-2 w-full border-borderColor bg-[#f5f5f5] rounded-md px-2 py-1 mt-2 active:border-primary"
      />
    </div>
  )
}

export default Input

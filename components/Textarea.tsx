import { NextPage } from "next"
import React, { Dispatch, SetStateAction, useState } from "react"

interface ITextareaProps {
  flex?: boolean
  disabled?: boolean
  label: string
  placeholder?: string
  setValue: Dispatch<SetStateAction<any>>
  defaultVal?: any
}

const Textarea: NextPage<ITextareaProps> = ({
  flex,
  disabled,
  label,
  placeholder,
  setValue,
  defaultVal,
}) => {
  return (
    <div
      className={
        flex
          ? "my-4 flex gap-4 items-center text-textColor font-mono"
          : "my-8 text-textColor font-mono"
      }
    >
      <p
        className={
          flex ? "w-[130px] text-xl font-semibold" : "text-xl font-semibold"
        }
      >
        {label}
      </p>
      <textarea
        rows={6}
        value={defaultVal && defaultVal}
        disabled={disabled && disabled}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="border-2 w-full border-borderColor font-sans bg-[#fff] rounded-md px-2 py-1 mt-2 active:border-primary"
      />
    </div>
  )
}

export default Textarea

import { NextPage } from "next"
import React from "react"

interface IInputProps {
  label: string
  placeholder: string
}

const Input: NextPage<IInputProps> = ({ label, placeholder }) => {
  return (
    <div className="my-8">
      <p className="text-xl font-semibold">{label}</p>
      <input
        type="text"
        placeholder={placeholder}
        className="border-2 w-full border-borderColor rounded-md px-2 py-1 mt-2 active:border-primary"
      />
    </div>
  )
}

export default Input

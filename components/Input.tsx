import { NextPage } from "next"
import React, { Dispatch, SetStateAction, useState } from "react"

interface IInputProps {
  label: string
  placeholder?: string
  value: any
  setValue: Dispatch<SetStateAction<any>>
}

const Input: NextPage<IInputProps> = ({ label, placeholder, value, setValue }) => {
  const[input,setInput] = useState("");
  return (
    <div className="my-8">
      <p className="text-xl font-semibold">{label}</p>
      <input
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="border-2 w-full border-borderColor rounded-md px-2 py-1 mt-2 active:border-primary"
      />
    </div>
  )
}

export default Input

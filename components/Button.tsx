import { NextPage } from "next"
import React from "react"

interface IButtonProps {
  text: string
}

const Button: NextPage<IButtonProps> = ({ text }) => {
  return (
    <div className="w-full">
      <div className="bg-primary flex justify-center py-2 rounded-md cursor-pointer hover:bg-primaryHover">
        <p className="text-[#fff] text-xl font-semibold">{text}</p>
      </div>
    </div>
  )
}

export default Button

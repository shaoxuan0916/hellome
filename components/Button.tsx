import { NextPage } from "next"
import React from "react"

interface IButtonProps {
  text: string
  outline?: boolean
}

const Button: NextPage<IButtonProps> = ({ text,outline }) => {
  return (
    <div className="w-full font-mono">
      <div
        className={
          outline
            ? "bg-secondary flex justify-center py-2 rounded-md cursor-pointer hover:bg-primary/80 border-2 border-primary"
            : "bg-primary flex justify-center py-2 rounded-md cursor-pointer hover:bg-primaryHover"
        }
      >
        <p
          className={
            outline
              ? "text-primary text-xl font-semibold"
              : "text-[#fff] text-xl font-semibold"
          }
        >
          {text}
        </p>
      </div>
    </div>
  )
}

export default Button

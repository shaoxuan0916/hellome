import { NextPage } from "next"
import React from "react"
interface IMessageCardProps {
  name: string
  time?: string
  message: string
}
const MessageCard: NextPage<IMessageCardProps> = ({ name, time, message }) => {
  return (
    <div className="px-4 py-2 mt-3 rounded-lg shadow-lg bg-[#FFF] w-full">
      <div className="text-md font-medium font-sans">{message}</div>
      <div className="flex items-center  justify-between mt-6 text-sm">
        <p className="font-sans">{time}</p>
        <p className="font-sans">{name}</p>
      </div>
    </div>
  )
}

export default MessageCard

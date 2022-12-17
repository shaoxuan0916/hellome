import { NextPage } from "next"
import React from "react"
interface IMessageCardProps{
  name:string,
  time:string,
  message:string
}
const MessageCard:NextPage<IMessageCardProps> = ({name,time,message}) => {
  return (
    <div className="px-4 py-2 mt-3 mx-8 rounded-lg shadow-lg bg-[#FFF]">
      <div className="font-semibold">
        {message}
      </div>
      <div className="flex items-center justify-between mt-6 text-sm">
        <p>
          {time}
        </p>
        <p>
          {name}
        </p>
      </div>
    </div>
  )
}

export default MessageCard

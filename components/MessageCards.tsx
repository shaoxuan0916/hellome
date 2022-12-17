import { NextPage } from "next"
import React from "react"
import MessageCard from "./MessageCard"

type MessageType = {
  name: string
  time: any
  message: string
}

interface IMessageCardsProps {
  messagesList: MessageType[] | undefined
}

const MessageCards: NextPage<IMessageCardsProps> = ({ messagesList }) => {
  // console.log("messagesList in cards", messagesList)

  const updatedMessagesList = messagesList?.map((item) => {
    const updatedTime = item.time.toDate()
    const newTimeFormat = new Date(updatedTime)

    const options: any = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }

    let time = newTimeFormat.toLocaleDateString("en-In", options)

    time = time.replace(",", "")

    return {
      name: item.name,
      time: time,
      message: item.message,
    }
  })

  // console.log("updatedMessagesList", updatedMessagesList)

  return (
    <div className="mx-8">
      <h4 className="pt-6 font-semibold text-primary text-lg bg-secondary">
        Your Anonymous Messages
      </h4>
      {updatedMessagesList && updatedMessagesList.length > 0 ? (
        updatedMessagesList.map((item) => (
          <div key={item.name}>
            <MessageCard
              name={item.name}
              time={item.time}
              message={item.message}
            />
          </div>
        ))
      ) : (
        <div className="mt-4">No Message Yet</div>
      )}
    </div>
  )
}

export default MessageCards

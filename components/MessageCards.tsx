import { NextPage } from "next"
import React, { useState } from "react"
import MessageCard from "./MessageCard"
import ModalMessageCard from "./ModalMessageCard"

type MessageType = {
  name: string
  time: any
  message: string
}

interface IMessageCardsProps {
  messagesList: MessageType[] | undefined
}

const MessageCards: NextPage<IMessageCardsProps> = ({ messagesList }) => {
  const [modalDetails, setModalDetails] = useState<any>()

  return (
    <div className="mx-6">
      <h4 className="pt-6 font-semibold text-primary text-lg bg-secondary font-mono">
        Your Anonymous Messages
      </h4>

      {modalDetails && modalDetails !== "" && (
        <ModalMessageCard
          name={modalDetails.name}
          time={modalDetails.time}
          message={modalDetails.message}
          setModalDetails={setModalDetails}
        />
      )}

      {messagesList && messagesList.length > 0 ? (
        messagesList.map((item) => (
          <div key={item.name}>
            <div
              className="cursor-pointer"
              onClick={() => {
                setModalDetails({
                  name: item.name,
                  time: item.time,
                  message: item.message,
                })
              }}
            >
              <MessageCard
                name={item.name}
                time={item.time}
                message={item.message}
              />
            </div>
          </div>
        ))
      ) : (
        <div className="mt-4">No Message Yet</div>
      )}
    </div>
  )
}

export default MessageCards

import { NextPage } from "next"
import React, { Dispatch, SetStateAction } from "react"
import { AiOutlineClose } from "react-icons/ai"

interface IModalMessageCardProps {
  setModalDetails: Dispatch<SetStateAction<any>>
  name: string
  time?: string
  message: string
}

const ModalMessageCard: NextPage<IModalMessageCardProps> = ({
  setModalDetails,
  name,
  time,
  message,
}) => {
  return (
    <div className="fixed bg-[#333]/80 top-0 bottom-0 left-0 right-0 z-999 max-w-[600px] mx-auto flex items-center">
      <div className="max-w-[600px] z-1000 m-auto w-full shadow-2xl rounded-lg bg-[#fff]">
        <div className="flex justify-between shadow-md">
          <h3 className="text-xl font-semibold text-textColor pl-4 pb-2 pt-4">
            Anonymous Message
          </h3>
          <div
            onClick={() => setModalDetails("")}
            className="text-2xl font-semibold cursor-pointer text-textColor pr-6 pb-2 pt-4"
          >
            <AiOutlineClose />
          </div>
        </div>
        <div className="flex gap-4 shadow-xl">
          <div className="px-4 py-2 mt-3 rounded-lg bg-[#FFF] w-full">
            <div className="text-md font-medium font-sans">{message}</div>
            <div className="flex items-center  justify-between mt-6 text-sm">
              <p className="font-mono">{time}</p>
              <p className="font-mono">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalMessageCard

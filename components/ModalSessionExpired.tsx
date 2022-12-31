import { NextPage } from "next"
import { useRouter } from "next/router"
import React from "react"
import Button from "./Button"

interface IModalSessionExpiredProps {}

const ModalSessionExpired: NextPage<IModalSessionExpiredProps> = ({}) => {
  let router = useRouter()

  return (
    <div className="fixed bg-[#333] top-0 bottom-0 left-0 right-0 z-999 max-w-[600px] mx-auto flex items-center">
      <div className="max-w-[600px] z-1000 m-auto w-full py-6 px-4 shadow-2xl rounded-lg bg-[#fff] ">
        <h3 className="mb-4 text-lg font-semibold text-textColor">
          Session expired. Please log in again :)
        </h3>

        <div className="flex gap-4">
          <div
            className="w-full"
            onClick={() => {
              router.push("/login")
            }}
          >
            <Button text="Log In" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalSessionExpired

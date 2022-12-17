import React, { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import useAuthStore from "../../store/authStore"
import { auth } from "../../firebase"
import { useRouter } from "next/router"
import Button from "../../components/Button"
import MessageCards from "../../components/MessageCards"

const HomePage = () => {
  return (
    <div className="max-w-[600px] mx-auto bg-secondary min-h-screen">
      <Navbar />
      {/* Copy Link Section  */}
      <div className="mx-8 mt-8">
        <div className="border-2 px-4 py-2 rounded-lg border-borderColor text-lg font-semibold">
          https://tell.me/username
        </div>
        <div className="mt-4" onClick={()=>{}}>
          <Button text="Copy Link"/>
        </div>
      </div>

      <div>
        <MessageCards />
      </div>
      {/* Todo: Home Page Contents */}
    </div>
  )
}

export default HomePage

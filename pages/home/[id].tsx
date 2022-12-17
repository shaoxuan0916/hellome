import React, { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import useAuthStore from "../../store/authStore"
import { auth } from "../../firebase"
import { useRouter } from "next/router"

const HomePage = () => {
  return (
    <div className="max-w-[600px] mx-auto">
      <Navbar />

      {/* Todo: Home Page Contents */}
    </div>
  )
}

export default HomePage

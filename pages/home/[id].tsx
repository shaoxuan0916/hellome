import React from "react"
import NavBar from "../../components/NavBar"
import useAuthStore from "../../store/authStore"
import { auth } from "../../firebase"

const HomePage = () => {
  const { userProfile } = useAuthStore()

  console.log("userProfile", userProfile)
  console.log("auth", auth)

  return (
    <div className="max-w-[600px] mx-auto">
      <NavBar />
      {/* <div>{userProfile?.email}</div> */}
      {/* <div>{auth.lastNotifiedUid}</div> */}
    </div>
  )
}

export default HomePage

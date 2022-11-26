import React from "react"
import NavBar from "../../components/NavBar"
import useAuthStore from "../../store/authStore"

const HomePage = () => {
  const { userProfile } = useAuthStore()

  console.log("userProfile", userProfile)

  return (
    <div className="max-w-[600px] mx-auto">
      <NavBar />
      {/* <div>{userProfile?.email}</div> */}
    </div>
  )
}

export default HomePage

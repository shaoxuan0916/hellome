import React, { useEffect, useState } from "react"
import NavBar from "../../components/NavBar"
import useAuthStore from "../../store/authStore"
import { auth } from "../../firebase"
import { useRouter } from "next/router"

const HomePage = () => {
  const { userProfile } = useAuthStore()
  const router = useRouter()
  const [show, setShow] = useState(false)

  console.log("userProfile", userProfile)
  // @ts-ignore
  // console.log("auth", auth.lastNotifiedUid)

  const currentUid = window.location.pathname.substring(6)

  useEffect(() => {
    // @ts-ignore
    if (currentUid !== auth.lastNotifiedUid) {
      router.push("/login")
      setShow(true)
    }
  }, [])

  return (
    <div className="max-w-[600px] mx-auto">
      <NavBar />
      {/* <div>{userProfile?.email}</div> */}
      {/* <div>{auth.lastNotifiedUid}</div> */}
    </div>
  )
}

export default HomePage

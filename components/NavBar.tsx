import React, { useState } from "react"
import Image from "next/image"
import logo from "../public/logo-green.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { useRouter } from "next/router"
import { signOut } from "firebase/auth"
import { useSignOut } from "react-firebase-hooks/auth"
import { auth } from "../firebase"
import useAuthStore from "../store/authStore"

const Navbar = () => {
  let router = useRouter()
  const { userProfile, removeUser } = useAuthStore()
  const [signOut, loading, error] = useSignOut(auth)

  const [showMenu, setShowMenu] = useState(false)

  const handleLogout = async () => {
    await signOut()
      .then(() => {
        // may be not need store
        // removeUser()
        console.log("Sign Out Successfully")
        router.push("/login")
      })
      .catch((error) => {
        console.log("Error")
      })
  }

  return (
    <div className="sticky">
      <div className="h-[65px] bg-secondary sticky">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <Image src={logo} alt="logo" height={38} />
          <div
            className="text-primary cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <GiHamburgerMenu size={30} />
          </div>
        </div>
        {showMenu && (
          <div className="bg-secondary py-4 shadow-lg rounded-lg">
            <div>
              <div
                className="py-4 text-center cursor-pointer"
                onClick={() => {
                  router.push(`/login`)
                }}
              >
                Home
              </div>
              <div
                className="py-4 text-center cursor-pointer"
                onClick={() => {
                  router.push(`/profile`)
                }}
              >
                Profile
              </div>
              <div
                className="py-4 text-center cursor-pointer px-4"
                onClick={() => handleLogout()}
              >
                Log Out
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

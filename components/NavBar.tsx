import React, { useState } from "react"
import Image from "next/image"
import logo from "../public/logo-green.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { useRouter } from "next/router"
import { useSignOut } from "react-firebase-hooks/auth"
import { auth } from "../firebase"
import useAuthStore from "../store/authStore"

const NavBar = () => {
  let router = useRouter()

  const [signOut, loading, error] = useSignOut(auth)
  const { removeUser, userProfile } = useAuthStore()

  const [showMenu, setShowMenu] = useState(false)

  const handleLogout = async () => {
    await signOut()
      .then(() => {
        console.log("Sign Out Successfully")
        router.push("/login")
        // .then(() => {
        removeUser()
        // })
      })
      .catch((error) => {
        console.log("Error")
      })
  }

  return (
    <div className="fixed w-full max-w-[600px] text-textColor">
      <div className="h-[65px] bg-secondary sticky shadow-md">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <div
            className="cursor-pointer"
            onClick={() => {
              // @ts-ignore
              router.push(`/home/${userProfile.username}`)
              setShowMenu(false)
            }}
          >
            <Image src={logo} alt="logo" height={38} />
          </div>
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
                  // To fixed: router should push to xxx/username
                  router.push(`/home/${userProfile.username}`)
                  setShowMenu(false)
                }}
              >
                Home
              </div>
              <div
                className="py-4 text-center cursor-pointer"
                onClick={() => {
                  // To fixed: router should push to xxx/username
                  router.push(`/profile/${userProfile.username}`)
                  setShowMenu(false)
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

export default NavBar

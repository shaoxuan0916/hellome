import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import NavBar from "../../components/NavBar"
import { AiOutlineArrowLeft } from "react-icons/ai"
import useAuthStore from "../../store/authStore"
import Input from "../../components/Input"
import ModalSessionExpired from "../../components/ModalSessionExpired"
import Head from "next/head"

const ProfilePage = () => {
  const { userProfile } = useAuthStore()

  let router = useRouter()

  const [username, setUsername] = useState<any>()
  const [email, setEmail] = useState<any>()
  const [userInfo, setUserInfo] = useState<any>()
  const [sessionExpired, setSessionExpired] = useState<boolean>(false)

  useEffect(() => {
    setUserInfo(userProfile)

    if (!userProfile) {
      setSessionExpired(true)
    }
  }, [userProfile])

  return (
    <>
      <Head>
        <title>Tell Me</title>
        <meta name="description" content="Send me anonymous message :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[600px] mx-auto min-h-screen pb-12 bg-secondary">
        <NavBar />

        {sessionExpired && <ModalSessionExpired />}

        {!userInfo ? (
          <div className="pt-24 px-4 text-textColor">Loading...</div>
        ) : (
          <div className="pt-24 px-4 ">
            <div className="flex items-center mb-12">
              <div
                onClick={() => router.push(`/home/${userInfo?.username}`)}
                className="text-textColor cursor-pointer mr-8 text-2xl text-green1 font-bold"
              >
                <AiOutlineArrowLeft />
              </div>
              <h2 className="text-3xl font-bold text-textColor font-mono">
                Your Profile
              </h2>
            </div>

            <div className="text-xl">
              <Input
                flex
                label="Email"
                disabled
                setValue={setEmail}
                defaultVal={userInfo?.user.email}
              />
              <Input
                flex
                label="Username"
                disabled
                setValue={setUsername}
                defaultVal={userInfo?.username}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ProfilePage

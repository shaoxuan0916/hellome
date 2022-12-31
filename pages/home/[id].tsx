import React, { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import useAuthStore from "../../store/authStore"
import { db } from "../../firebase"
import Button from "../../components/Button"
import MessageCards from "../../components/MessageCards"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { collection, orderBy, query } from "firebase/firestore"
import toast from "react-hot-toast"
import ModalSessionExpired from "../../components/ModalSessionExpired"
import Head from "next/head"

const HomePage = () => {
  const { userProfile } = useAuthStore()

  // @ts-ignore
  const path = `users/${userProfile?.username}/messages`

  const [messagesList, setMessagesList] = useState<any[]>()

  const [sessionExpired, setSessionExpired] = useState<boolean>(false)

  // query messages by upload time
  const messagesQuery = query(collection(db, path), orderBy("time", "desc"))

  const [docs, loading, error] = useCollectionData(messagesQuery)

  useEffect(() => {
    setMessagesList(docs)

    if (!userProfile) {
      setSessionExpired(true)
    }
  }, [docs, userProfile])

  // const url = `tell.me/${userProfile?.username}`
  const url = `localhost:3000/${userProfile?.username}`

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(url)
    toast.success("Link Copied !")
  }

  return (
    <div className="max-w-[600px] text-textColor mx-auto bg-secondary min-h-screen pb-12">
      <Head>
        <title>Tell Me</title>
        <meta name="description" content="Send me anonymous message :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {/* Copy Link Section  */}
      <div className="mx-6 pt-24">
        <div className="text-ellipsis overflow-clip border-2 px-4 py-2 rounded-lg border-borderColor text-lg font-semibold">
          {url}
        </div>
        <div className="mt-4" onClick={handleCopyUrl}>
          <Button text="Copy Link" />
        </div>
      </div>

      {sessionExpired && <ModalSessionExpired />}

      {loading ? (
        <div className="mx-8 pt-8">Loading...</div>
      ) : (
        <div>
          <MessageCards messagesList={messagesList} />
        </div>
      )}
    </div>
  )
}

export default HomePage

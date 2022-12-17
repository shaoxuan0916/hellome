import React, { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import useAuthStore from "../../store/authStore"
import { auth, db } from "../../firebase"
import { useRouter } from "next/router"
import Button from "../../components/Button"
import MessageCards from "../../components/MessageCards"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { collection } from "firebase/firestore"

const HomePage = () => {
  const [user] = useAuthState(auth)

  // @ts-ignore
  const path = `users/${user?.uid}/messages`

  console.log("path", path)

  const [messagesList, setMessagesList] = useState<any[]>()

  const query = collection(db, path)

  const [docs, loading, error] = useCollectionData(query)

  useEffect(() => {
    setMessagesList(docs)
  }, [docs])

  return (
    <div className="max-w-[600px] mx-auto bg-secondary min-h-screen">
      <Navbar />
      {/* Copy Link Section  */}
      <div className="mx-8 pt-8">
        <div className="border-2 px-4 py-2 rounded-lg border-borderColor text-lg font-semibold">
          https://tell.me/username
        </div>
        <div className="mt-4" onClick={() => {}}>
          <Button text="Copy Link" />
        </div>
      </div>

      <div>
        <MessageCards messagesList={messagesList} />
      </div>
      {/* Todo: Home Page Contents */}
    </div>
  )
}

export default HomePage

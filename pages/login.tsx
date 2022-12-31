import React, { useEffect, useState } from "react"
import Input from "../components/Input"
import Image from "next/image"
import logo from "../public/logo-green.png"
import Button from "../components/Button"
import Link from "next/link"
import { auth, db } from "../firebase"
import { useRouter } from "next/router"
import useAuthStore from "../store/authStore"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { collection, query, where } from "firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"
import Head from "next/head"

const LoginPage = () => {
  const [errorMsg, setErrorMsg] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [username, setUsername] = useState<any>()

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)

  const { addUser } = useAuthStore()

  const usersQuery = query(
    collection(db, `/users/`),
    where("email", "==", email)
  )

  const [docs] = useCollectionData(usersQuery)

  let router = useRouter()

  const handleLogin = (e: any) => {
    e.preventDefault()

    if (email === "" || password === "") {
      setErrorMsg("Email or Password cannot be empty")
      return
    }

    signInWithEmailAndPassword(email, password)
  }

  // useEffect when docs changes --> when email been found in database, set username as state and add to store later on
  useEffect(() => {
    if (docs) {
      setUsername(docs[0]?.username)
    }
  }, [docs])

  // useEffect when user, loading or error changes --> useSignInWithEmailAndPassword hook
  useEffect(() => {
    // if log in successfull, add user and username to store
    if (user) {
      addUser(user.user, username)
      router.push(`/home/${username}`)
    }

    if (error) {
      console.log("error------", error)

      if (errorMsg.includes("network-request-failed")) {
        setErrorMsg("Network error. Please check your network.")
      } else {
        setErrorMsg("Invalid email or password")
      }
    }
  }, [user, error, loading])

  return (
    <div className=" h-[100vh] bg-[#fff]">
      <Head>
        <title>Tell Me</title>
        <meta name="description" content="Send me anonymous message :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[25%] bg-secondary  flex items-center justify-center">
        <div>
          <Image priority src={logo} alt="logo" width={300} height={200} />
        </div>
      </div>

      <div className="bg-white px-8 pt-12 pb-12 max-w-[600px] mx-auto ">
        <h3 className="text-4xl font-semibold font-mono text-textColor">Log In</h3>

        <div className="mt-8">
          {errorMsg && <p className="text-errorMsg">{errorMsg}</p>}

          <form action="">
            <Input label="Email" placeholder="Your Email" setValue={setEmail} />
            <Input
              type="password"
              label="Password"
              placeholder="Password"
              setValue={setPassword}
            />
          </form>
          <div onClick={handleLogin}>
            <Button text={loading ? "Logging in ..." : "Log In"} />
          </div>
          <div className="pt-2 text-primary font-mono">
            <Link href="/signup">
              Doesn&apos;t Have An Account? Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
import React, { useEffect, useState } from "react"
import Image from "next/image"
import logo from "../public/logo-green.png"
import Input from "../components/Input"
import Button from "../components/Button"
import Link from "next/link"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import { collection, doc, setDoc, query, where } from "firebase/firestore"
import { auth, db } from "../firebase"
import useAuthStore from "../store/authStore"
import { useRouter } from "next/router"
import { useCollectionData } from "react-firebase-hooks/firestore"
import Head from "next/head"

const SignUpPage = () => {
  const [errorMsg, setErrorMsg] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [usernameExists, setUsernameExists] = useState<any>()

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)

  const { addUser } = useAuthStore()

  // query for react-firebase-hooks, find if username exists
  const usersQuery = query(
    collection(db, `/users/`),
    where("username", "==", username)
  )

  const [docs] = useCollectionData(usersQuery)

  let router = useRouter()

  const handleSignUp = (e: any) => {
    e.preventDefault()

    if (email === "" || password === "") {
      setErrorMsg("Email or Password cannot be empty")
      return
    }

    if (password !== confirmPassword) {
      setErrorMsg("Password and confirm password doen't match")
      return
    }

    if (password.length < 8) {
      setErrorMsg("Password should at least 8 characters")
      return
    }

    if (username.length < 6) {
      setErrorMsg("Username should at least 6 characters")
      return
    }

    if (usernameExists.length > 0) {
      setErrorMsg("Username already exists. Please change another username.")
      return
    }

    createUserWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    setUsernameExists(docs)
  }, [docs])

  useEffect(() => {
    if (user) {
      // Signed in
      if (errorMsg) {
        setErrorMsg("")
      }

      // add new user to firestore
      try {
        const docRef = setDoc(
          doc(db, "users", username),
          {
            email: email,
            uid: user.user.uid,
            username: username,
          },
          { merge: true }
        )

        addUser(user.user, username)

        router.push(`/home/${username}`)
      } catch (e) {
        console.error("Error adding document: ", e)
      }
    }

    if (error) {
      const errorMsg = error.message

      console.log("error", error)
      console.log("errorToString", errorMsg)

      if (errorMsg.includes("email-already-in-use")) {
        setErrorMsg(
          "User alreay exists. Please change another email to sign up"
        )
      } else if (errorMsg.includes("invalid-email")) {
        setErrorMsg("Invalid Email")
      } else if (errorMsg.includes("network-request-failed")) {
        setErrorMsg("Network error. Please check your network.")
      } else {
        setErrorMsg("Something Went Wrong. Please Try Again.")
      }
    }
  }, [user, error])

  return (
    <div className="h-[100vh] bg-[#fff]">
      <Head>
        <title>Tell Me</title>
        <meta name="description" content="Send me anonymous message :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[25%] bg-secondary flex items-center justify-center">
        <div>
          <Image priority src={logo} alt="logo" width={300} height={200} />
        </div>
      </div>

      <div className="bg-white px-8 pt-12 pb-12 max-w-[600px] mx-auto bg-[#fff]">
        <h3 className="text-4xl font-semibold text-textColor font-mono">Sign Up</h3>

        <div className="mt-8">
          {errorMsg && <p className="text-errorMsg">{errorMsg}</p>}

          <form action="">
            <Input label="Email" placeholder="Your Email" setValue={setEmail} />
            <Input
              label="Username"
              placeholder="Min 6 characters"
              setValue={setUsername}
            />
            <Input
              type="password"
              label="Password"
              placeholder="Min 8 charaters "
              setValue={setPassword}
            />

            <Input
              type="password"
              label="Confirm Password"
              placeholder="Re-type your password"
              setValue={setConfirmPassword}
            />
          </form>
          <div onClick={handleSignUp}>
            <Button text={loading ? "Signing Up ..." : "Sign Up"} />
          </div>
          <div className="pt-2 text-primary font-mono">
            <Link href="/login">Already Have An Account? Login Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage

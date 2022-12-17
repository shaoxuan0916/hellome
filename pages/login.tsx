import React, { useEffect, useState } from "react"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import Input from "../components/Input"
import Image from "next/image"
import logo from "../public/logo-green.png"
import Button from "../components/Button"
import Link from "next/link"
import { auth } from "../firebase"
import { useRouter } from "next/router"
import useAuthStore from "../store/authStore"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"

const LoginPage = () => {
  const [errorMsg, setErrorMsg] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)

  const { addUser, userProfile } = useAuthStore()

  let router = useRouter()

  const handleLogin = (e: any) => {
    e.preventDefault()

    if (email === "" || password === "") {
      setErrorMsg("Email or Password cannot be empty")
      return
    }

    signInWithEmailAndPassword(email, password)
  }

  if (user) {
    // addUser(user)
    router.push(`/home/${user.user.uid}`)
  }

  if (error) {
    setErrorMsg("Email or Password is incorrect")
    console.log("error------", error)
  }

  return (
    <div className=" h-[100vh] ">
      <div className="h-[25%] bg-secondary flex items-center justify-center">
        <div>
          <Image priority src={logo} alt="logo" width={300} height={200} />
        </div>
      </div>

      <div className="bg-white px-8 pt-12 max-w-[600px] mx-auto">
        <h3 className="text-4xl font-semibold">Log In</h3>

        <div className="mt-8">
          {error && <p className="text-errorMsg">{errorMsg}</p>}

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
            <Button text="Log In" />
          </div>
          <div className="pt-2 text-primary">
            <Link href="/signup">Doesn't Have An Account? Sign Up Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

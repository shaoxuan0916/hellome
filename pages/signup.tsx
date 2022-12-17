import React, { useState } from "react"
import Image from "next/image"
import logo from "../public/logo-green.png"
import Input from "../components/Input"
import Button from "../components/Button"
import Link from "next/link"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../firebase"
import useAuthStore from "../store/authStore"
import { useRouter } from "next/router"

const SignUpPage = () => {
  const [errorMsg, setErrorMsg] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)
  // maybe no need store
  // const { addUser } = useAuthStore()

  // Todo:
  // const [username, setUsername] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("")

  let router = useRouter()

  const handleSignUp = (e: any) => {
    e.preventDefault()

    if (email === "" || password === "") {
      setErrorMsg("Email or Password cannot be empty")
      return
    }

    // Todo: password checking

    // if() {
    //   return
    // }

    createUserWithEmailAndPassword(email, password)
  }

  if (user) {
    // Signed in
    if (errorMsg) {
      setErrorMsg("")
    }

    // add new user to firestore
    try {
      const docRef = setDoc(
        doc(db, "users", user.user.uid),
        {
          email: email,
          uid: user.user.uid,
        },
        { merge: true }
      )

      router.push(`/home/${user.user.uid}`)
      console.log("something hereeeeeeee")
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  }

  if (error) {
    const errorMsg = error.message

    console.log("error", error)
    console.log("errorToString", errorMsg)

    if (errorMsg.includes("email-already-in-use")) {
      setErrorMsg("User Alreay Exist")
    } else if (errorMsg.includes("invalid-email")) {
      setErrorMsg("Invalid Email")
    } else {
      setErrorMsg("Something Went Wrong. Please Try Again.")
    }
  }

  return (
    <div className=" h-[100vh] ">
      <div className="h-[25%] bg-secondary flex items-center justify-center">
        <div>
          <Image priority src={logo} alt="logo" width={300} height={200} />
        </div>
      </div>

      <div className="bg-white px-8 pt-12 max-w-[600px] mx-auto">
        <h3 className="text-4xl font-semibold">Sign Up</h3>

        <div className="mt-8">
          {error && <p className="text-errorMsg">{errorMsg}</p>}

          {/* <Input label="Username" placeholder="min 6 characters" /> */}
          <form action="">
            <Input label="Email" placeholder="Your Email" setValue={setEmail} />
            <Input
              type="password"
              label="Password"
              placeholder="min 8 charaters include upper and lower case"
              setValue={setPassword}
            />

            {/* <Input
            label="Confirm Password"
            placeholder="Re-type your password"
            setValue={setConfirmPassword}
          /> */}
          </form>
          <div onClick={handleSignUp}>
            <Button text="Sign Up" />
          </div>
          <div className="pt-2 text-primary">
            <Link href="/login">Already Have An Account? Login Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage

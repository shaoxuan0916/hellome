import React, { useState } from "react"
import Image from "next/image"
import logo from "../public/logo-green.png"
import Input from "../components/Input"
import Button from "../components/Button"
import Link from "next/link"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

const SignUpPage = () => {
  const [error, setError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [username, setUsername] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("")

  const handleSignUp = (e: any) => {
    e.preventDefault()

    if (email === "" || password === "") {
      setError("Email or Password cannot be empty")
      return
    }

    // password checking

    // if() {
    //   return
    // }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setError("")
        const user = userCredential.user
        console.log(user)

        // Todo:
        // create authStore to handle authState
        // direct to home page, add authState to authStore
      })
      .catch((error) => {
        const errorMsg = error.toString()

        console.log("errorMsg", errorMsg)

        if (errorMsg.includes("email-already-in-use")) {
          setError("User Alreay Exist")
        } else if (errorMsg.includes("invalid-email")) {
          setError("Invalid Email")
        } else {
          setError("Something Went Wrong. Please Try Again.")
        }
      })
  }

  return (
    <div className=" h-[100vh] ">
      <div className="h-[25%] bg-secondary flex items-center justify-center">
        <div>
          <Image src={logo} alt="logo" width={300} height={200} />
        </div>
      </div>

      <div className="bg-white px-8 pt-12 max-w-[600px] mx-auto">
        <h3 className="text-4xl font-semibold">Sign Up</h3>

        <div className="mt-8">
          {error && <p className="text-errorMsg">{error}</p>}

          {/* <Input label="Your Name" placeholder="This is your display name" /> */}
          {/* <Input label="Username" placeholder="min 6 characters" /> */}

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

import React from "react"
import Image from "next/image"
import logo from "../public/logo-green.png"
import Input from "../components/Input"

const SignUpPage = () => {
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
          {/* <Input label="Your Name" placeholder="This is your display name" /> */}
          <Input label="Username" placeholder="min 6 characters" />
          <Input label="Email" placeholder="Your Email" />
          <Input
            label="Password"
            placeholder="min 8 charaters include upper and lower case"
          />
          <Input label="Confirm Password" placeholder="Re-type your password" />
        </div>
      </div>
    </div>
  )
}

export default SignUpPage

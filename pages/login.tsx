import React from "react"
import Input from "../components/Input"
import Image from "next/image"
import logo from "../public/logo-green.png"
import Button from "../components/Button"
import Link from "next/link"

const LoginPage = () => {
  return (
    <div className=" h-[100vh] ">
      <div className="h-[25%] bg-secondary flex items-center justify-center">
        <div>
          <Image src={logo} alt="logo" width={300} height={200} />
        </div>
      </div>

      <div className="bg-white px-8 pt-12 max-w-[600px] mx-auto">
        <h3 className="text-4xl font-semibold">Log In</h3>

        <div className="mt-8">
          {/* <Input label="Your Name" placeholder="This is your display name" /> */}
          {/* <Input label="Email" placeholder="Your Email" />
          <Input
            label="Password"
            placeholder="Password"
          /> */}
          <Button text="Log In"/>
          <div className="pt-2 text-primary">
            <Link href='/signup'>Doesn't Have An Account? Sign Up Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

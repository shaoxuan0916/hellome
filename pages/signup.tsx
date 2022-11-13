import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo-green.png";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "next/link";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../firebase";

const SignUpPage = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = getAuth();
  const handleSignUp = (e: any) => {
    console.log("Success");
    console.log(email);
    console.log(password);
    console.log(auth);
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        setError(true);
      });
  };
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
          {/* <Input label="Username" placeholder="min 6 characters" /> */}
          <form onSubmit={handleSignUp}>
          <Input label="Email" placeholder="Your Email" value={email} setValue={setEmail}/>
          <Input
            label="Password"
            placeholder="min 8 charaters include upper and lower case"
            value={password} 
            setValue={setPassword}
          />
          {/* <Input label="Confirm Password" placeholder="Re-type your password" value={confirmPassword} setValue={setConfirmPassword} /> */}
          {/* <div onClick={handleSignUp}>
            <Button text="Sign Up" />
          </div> */}
          <button type="submit">
            Sign Up
          </button>
          <div className="pt-2 text-primary">
            <Link href="/login">Already Have An Account? Login Now</Link>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

import { doc, setDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import { db } from "../firebase";
import logo from "../public/logo-green.png";
import { v4 as uuidv4 } from 'uuid';
import ModalSuccess from "../components/ModalSuccess";

const SenderPage = () => {
  const [name, setName] = useState<any>("");
  const [message, setMessage] = useState<any>("");
  const [errorMsg, setErrorMsg] = useState<any>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();
  const path = `users/${router.query.id}/messages`;
  const handleSend = async () => {

    let currentdate = new Date();
    const options: any = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }

    let time = currentdate.toLocaleDateString("en-In", options)

    time = time.replace(",", "")
    const uuid = uuidv4();
    const docRef = doc(db, path, `${uuid}`);

    if (name === "" || message === "") {
      setErrorMsg("Name or message cannot be empty.");
      return;
    }

    await setDoc(
      docRef,
      {
        name: name,
        message: message,
        time: time
      }
    )
    setErrorMsg("");
    setShowModal(true);
    // toast.success("Sent Successfully");
  };
  return (
    <div className="max-w-[600px] text-textColor mx-auto bg-secondary min-h-screen pb-12 px-10">
      {showModal && <ModalSuccess/>}
      <div className="flex items-center justify-center pt-16">
        <div>
          <Image src={logo} alt="logo" width={350} height={230} />
        </div>
      </div>
      <div className="mt-20">
        <Input
          label="Your Anonymous Name:"
          setValue={setName}
          placeholder="your anonymous name"
        />
        <Textarea
          label="Your Message:"
          setValue={setMessage}
          placeholder="send me anonymous messages..."
        />
        {errorMsg !== "" && <p className="text-errorMsg mb-2">{errorMsg}</p>}
        <div onClick={handleSend}>
          <Button text="Send" />
        </div>
      </div>
      <div className="mt-20 font-mono text-textColor text-center">
        <p className="font-medium">Create Your Own Link ?</p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup">
            <p className="font-semibold text-primaryHover">Sign Up</p>
          </Link>
          <Link href="/login">
            <p className="font-semibold text-textColor">Log In</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SenderPage;

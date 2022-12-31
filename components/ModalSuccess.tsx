import { NextPage } from "next";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface IModalSuccessProps {}

const ModalSuccess: NextPage<IModalSuccessProps> = ({}) => {
  return (
    <div className="fixed bg-[#666]/80 top-0 bottom-0 left-0 right-0 z-999 max-w-[600px] mx-auto flex items-center">
      <div className="max-w-[600px] z-1000 m-auto w-full shadow-2xl rounded-lg bg-[#fff]">
        <div className="p-6 rounded-lg bg-[#FFF] w-full">
          <div className="flex justify-center">
            <div className="text-6xl text-primary">
              <IoMdCheckmarkCircleOutline />
            </div>
          </div>
          <p className="text-xl text-center mt-2 font-mono">
            Sent Successfully!
          </p>
          <div className="mt-8 font-mono text-textColor text-center">
            <p className="font-medium mb-2">Create Your Own Link ?</p>
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
      </div>
    </div>
  );
};

export default ModalSuccess;

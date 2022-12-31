import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Script from "next/script";
import Button from "../components/Button";
import MessageCard from "../components/MessageCard";
import logo from "../public/logo-green.png";

export default function Home() {
  let router = useRouter();
  return (
    <div>
      <Head>
        <title>Tell Me</title>
        <meta name="description" content="Send me anonymous message :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Landing Page */}
      <div className="min-h-[100vh] bg-secondary max-w-[600px] mx-auto px-8">
        <div className="">
          <div className="py-16">
            <Image
              src={logo}
              style={{ width: "auto", height: "auto" }}
              alt="logo"
            />
          </div>
          <div className="text-textColor font-mono italic">
            <div className="text-xl text-left">
              <p>We deliver <br/>your message anonymously</p>
            </div>
            <div className="flex flex-col gap-2 my-12">
              <div onClick={() => router.push("/signup")}>
                <Button text="Sign Up" />
              </div>
              <div onClick={() => router.push("/login")}>
                <Button text="Log In" outline={true} />
              </div>
            </div>
            <div className="text-xl text-center fixed bottom-0 left-0 right-0 mb-8">
              <p className="font-semibold">&quot;Shhh...&quot;</p>
              <p>
                Just <b className="text-primary">tell.me</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

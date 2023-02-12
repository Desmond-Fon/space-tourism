import Header from "components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import capsule from "../../../public/assets/technology/image-space-capsule-landscape.jpg";

const Vehicle = () => {
  return (
    <>
      <Head>
        <title>Space Tourism | Technology</title>
      </Head>
      <div className="bg-[url('../../public/assets/technology/background-technology-mobile.jpg')] md:bg-[url('../../public/assets/technology/background-technology-tablet.jpg')] lg:bg--[url('../../public/assets/technology/background-technology-desktop.jpg')] bg-center bg-cover w-full">
        <Header />
        <h1 className="mt-[24px] mb-[32px] text-center font-barlow text-cream tracking-[2.7px] leading-[19.2px] text-[16px]">
          <span className="pr-[10px] opacity-[0.25] font-bold">03</span>SPACE
          LAUNCH 101
        </h1>
        <div className="mb-[34px] w-full">
          <Image src={capsule} alt="" className="w-full" />
        </div>
        <div className="flex justify-center items-center mb-[26px]">
          <Link href="/technology">
            <div className="w-[40px] h-[40px] border border-gray-800 rounded-full hover:opacity-[0.5] active:opacity-[1] font-bellefair flex justify-center items-center text-cream mr-[16px] hover:border-cream active:bg-cream active:text-darkBlue">
              1{" "}
            </div>
          </Link>
          <Link href="/technology/spaceport">
            <div className="w-[40px] h-[40px] border border-gray-800 rounded-full hover:opacity-[0.5] active:opacity-[1] font-bellefair flex justify-center items-center text-cream mr-[16px] hover:border-cream active:bg-cream active:text-darkBlue">
              2{" "}
            </div>
          </Link>
          <Link href="/technology/capsule">
            <div className="w-[40px] h-[40px] border border-gray-800 rounded-full hover:opacity-[0.5] active:opacity-[1] font-bellefair flex justify-center items-center text-cream hover:border-cream active:bg-cream active:text-darkBlue">
              3{" "}
            </div>
          </Link>
        </div>

        <h3 className="font-barlow text-[14px] leading-[16.8px] tracking-[2.36px] text-center text-skyBlue mb-[9px]">
          THE TERMINOLOGY...
        </h3>
        <h1 className="font-bellefair text-[24px] leading-[27.5px] text-cream text-center mb-[16px]">
          SPACE CAPSULE
        </h1>

        <p className="px-[24px] pb-[81px] font-barlow text-[15px] leading-[25px] text-center text-skyBlue">
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth&apos;s atmosphere without wings.
          Our capsule is where you&apos;ll spend your time during the flight. It
          includes a space gym, cinema, and plenty of other activities to keep
          you entertained.
        </p>
      </div>
    </>
  );
};

export default Vehicle;
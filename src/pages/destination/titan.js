import Header from "components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import titan from "../../../public/assets/destination/image-titan.png";

const Titan = () => {
  return (
    <>
      <Head>
        <title>Space Tourism | Destination</title>
      </Head>
      <div className="bg-[url('../../public/assets/destination/background-destination-mobile.jpg')] md:bg-[url('../../public/assets/destination/background-destination-tablet.jpg')] lg:bg--[url('../../public/assets/destination/background-destination-desktop.jpg')] bg-center bg-cover w-full">
        <Header />
        <h1 className="mt-[24px] mb-[32px] text-center font-barlow text-cream tracking-[2.7px] leading-[19.2px] text-[16px]">
          <span className="pr-[10px] opacity-[0.25] font-bold">01</span>PICK
          YOUR DESTINATION
        </h1>

        <div className="flex justify-center items-center mb-[26px]">
          <Image src={titan} alt="" className="w-[170px] h-[170px]" />
        </div>

        <div className="text-skyBlue font-barlow tracking-[2.36px] leading-[16.9px] text-[14px] flex justify-center items-center">
          <Link
            href="/destination"
            className=" hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream"
          >
            MOON
          </Link>
          <Link
            href="/destination/mars"
            className="ml-[27px] hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream"
          >
            MARS
          </Link>
          <Link
            href="/destination/europa"
            className="ml-[27px] hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream"
          >
            EUROPA
          </Link>
          <Link
            href="/destination/titan"
            className="ml-[27px] hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream"
          >
            TITAN
          </Link>
        </div>

        <h1 className="font-bellefair text-center leading-[64.2px] text-cream text-[56px] mt-[20px] mb-[1px]">
          TITAN
        </h1>
        <p className="font-barlow text-center px-[24px] text-skyBlue text-[15px] leading-[25px] font-[400]">
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>

        <div className="flex justify-center items-center my-[32px]">
          <div className="h-[1px] w-[327px] bg-lineColor"></div>
        </div>

        <p className="mt-[32px] mb-[12px] text-center text-[14px] leading=[16.8px] tracking-[2.36px] text-skyBlue font-barlow">
          AVG. DISTANCE
        </p>
        <p className="pb-[32px] font-bellefair text-[28px] text-center leading-[32.1px] text-cream">
          1.6 BIL. KM
        </p>

        <p className="mb-[12px] text-center text-[14px] leading=[16.8px] tracking-[2.36px] text-skyBlue font-barlow">
          EST. TRAVEL TIME
        </p>

        <p className="pb-[58px] font-bellefair text-[28px] text-center leading-[32.1px] text-cream">
          7 YEARS
        </p>
      </div>
    </>
  );
};

export default Titan;

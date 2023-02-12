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
      <div className="bg-[url('../../public/assets/destination/background-destination-mobile.jpg')] md:bg-[url('../../public/assets/destination/background-destination-tablet.jpg')] lg:bg--[url('../../public/assets/destination/background-destination-desktop.jpg')] bg-center bg-cover w-full md:h-[100vh]">
        <Header />
        <h1 className="mt-[24px] md:mt-[40px] md:text-[20px] md:tracking-[3.38px] md:leading-[24px] md:text-left md:mb-[60px] mb-[32px] text-center font-barlow text-cream tracking-[2.7px] leading-[19.2px] text-[16px] md:pl-[24px]">
          <span className="pr-[10px] opacity-[0.25] font-bold">01</span>PICK
          YOUR DESTINATION
        </h1>

        <div className="flex justify-center items-center mb-[26px] md:mb-[53px]">
          <Image src={titan} alt="" className="w-[170px] h-[170px] md:w-[300px] md:h-[300px]" />
        </div>

        <div className="text-skyBlue font-barlow tracking-[2.36px] leading-[16.9px] text-[14px] flex justify-center items-center md:text-[16px] md:tracking-[2.7px] md:leading-[19.2px]">
        <Link
            href="/destination"
            className=" hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream md:pb-[12px]"
          >
            MOON
          </Link>
          <Link
            href="/destination/mars"
            className="ml-[27px] hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream md:ml-[35px] md:pb-[12px]"
          >
            MARS
          </Link>
          <Link
            href="/destination/europa"
            className="ml-[27px] hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream md:ml-[35px] md:pb-[12px]"
          >
            EUROPA
          </Link>
          <Link
            href="/destination/titan"
            className="ml-[27px] hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream md:ml-[35px] md:pb-[12px]"
          >
            TITAN
          </Link>
        </div>

        <h1 className="font-bellefair text-center leading-[64.2px] text-cream text-[56px] mt-[20px] mb-[1px] md:mt-[32px text-[80px] md:leading-[92px] md:mb-[8px]">
          TITAN
        </h1>
        <p className="font-barlow text-center px-[24px] text-skyBlue text-[15px] leading-[25px] font-[400] md:px-[98px] md:text-[16px] md:leading-[28px]">
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>

        <div className="flex justify-center items-center my-[32px] mt-[49px] mb-[28px]">
          <div className="h-[1px] w-[327px] bg-lineColor md:w-[573px]"></div>
        </div>

        <div className="md:flex md:justify-around md:px-[98px] md:items-center md:pb-[62px] md:mt-[49px]">
        <div>
        <p className="mt-[32px] mb-[12px] text-center text-[14px] leading-[16.8px] tracking-[2.36px] text-skyBlue font-barlow md:mt-[28px]">
          AVG. DISTANCE
        </p>
        <p className="pb-[32px] font-bellefair text-[28px] text-center leading-[32.1px] text-cream md:pb-0">
          1.6 BIL KM
        </p>
        </div>

        <div>
        <p className="mb-[12px] text-center text-[14px] leading-[16.8px] tracking-[2.36px] text-skyBlue font-barlow  md:mt-[28px]">
          EST. TRAVEL TIME
        </p>

        <p className="pb-[58px] font-bellefair text-[28px] text-center leading-[32.1px] text-cream md:pb-0">
          7 YEARS
        </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Titan;

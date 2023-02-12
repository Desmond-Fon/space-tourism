import Header from "components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import douglas from "../../../public/assets/crew/image-douglas-hurley.png";

const Crew = () => {
  return (
    <>
      <Head>
        <title>Space Tourism | Crew</title>
      </Head>
      <div className="bg-[url('../../public/assets/crew/background-crew-mobile.jpg')] md:bg-[url('../../public/assets/crew/background-crew-tablet.jpg')] lg:bg--[url('../../public/assets/crew/background-crew-desktop.jpg')] bg-center bg-cover w-full">
        <Header />
        <h1 className="mt-[24px] mb-[32px] text-center font-barlow text-cream tracking-[2.7px] leading-[19.2px] text-[16px]">
          <span className="pr-[10px] opacity-[0.25] font-bold">02</span>MEET
          YOUR CREW
        </h1>

        <div className="flex justify-center items-center mb-[32px]">
          <Image src={douglas} alt="" className="w-[177px] h-[222px]" />
        </div>

        <div className="flex justify-center items-center mb-[32px]">
          <Link href="/crew">
            <div className="w-[10px] h-[10px] bg-cream rounded-full opacity-[0.17] hover:opacity-[0.5] active:opacity-[1]"></div>
          </Link>
          <Link href="/crew/mark">
            <div className="w-[10px] h-[10px] bg-cream rounded-full ml-[16px] opacity-[0.17] hover:opacity-[0.5]"></div>
          </Link>
          <Link href="/crew/victor">
            <div className="w-[10px] h-[10px] bg-cream rounded-full  ml-[16px] opacity-[0.17] hover:opacity-[0.5]"></div>
          </Link>
          <Link href="/crew/anousheh">
            <div className="w-[10px] h-[10px] bg-cream rounded-full ml-[16px] opacity-[0.17] hover:opacity-[0.5]"></div>
          </Link>
        </div>

        <h2 className="mb-[8px] font-bellefair text-[16px] leading-[18.5px] text-center text-cream opacity-[0.5]">
          COMMANDER
        </h2>

        <h1 className="mb-[16px] text-[24px] font-bellefair leading-[28px] text-cream text-center">
          DOUGLAS HURLEY
        </h1>

        <p className="pb-[104px] px-[24px] text-center font-barlow text-[15px] leading-[25px] text-skyBlue">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
    </>
  );
};

export default Crew;

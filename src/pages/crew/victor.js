import Header from "components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import victor from "../../../public/assets/crew/image-victor-glover.png";

const Victor = () => {
  return (
    <>
      <Head>
        <title>Space Tourism | Crew</title>
      </Head>
      <div className="bg-[url('../../public/assets/crew/background-crew-mobile.jpg')] md:bg-[url('../../public/assets/crew/background-crew-tablet.jpg')] lg:bg--[url('../../public/assets/crew/background-crew-desktop.jpg')] bg-center bg-cover w-full h-full">
        <Header />
        <h1 className="mt-[24px] mb-[32px] text-center font-barlow text-cream tracking-[2.7px] leading-[19.2px] text-[16px]">
          <span className="pr-[10px] opacity-[0.25] font-bold">02</span>MEET
          YOUR CREW
        </h1>

        <div className="flex justify-center items-center mb-[32px]">
          <Image src={victor} alt="" className="w-[181px] h-[222px]" />
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
          PILOT
        </h2>

        <h1 className="mb-[16px] text-[24px] font-bellefair leading-[28px] text-cream text-center">
          VICTOR GLOVER
        </h1>

        <p className="pb-[54px] px-[24px] text-center font-barlow text-[15px] leading-[25px] text-skyBlue">
          Pilot on the first operational flight of the SpaceX Crew Dragon to the
          International Space Station. Glover is a commander in the U.S. Navy
          where he pilots an F/A-18.He was a crew member of Expedition 64, and
          served as a station systems flight engineer.
        </p>
      </div>
    </>
  );
};

export default Victor;

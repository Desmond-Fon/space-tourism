import Header from "components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const TechnologyPage = ({picture, tech, techParagraph}) => {
  return (
    <>
    <Head>
      <title>Space Tourism | Technology</title>
    </Head>
    <div className="bg-[url('../../public/assets/technology/background-technology-mobile.jpg')] md:bg-[url('../../public/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('../../public/assets/technology/background-technology-desktop.jpg')] bg-center bg-cover w-[100vw] h-screen md:h-[100vh]">
      <Header />
      <h1 className="mt-[24px] md:mt-[40px] md:text-[20px] md:tracking-[3.38px] md:leading-[24px] md:text-left md:mb-[60px] mb-[32px] text-center font-barlow text-cream tracking-[2.7px] leading-[19.2px] text-[16px] md:pl-[24px]">
        <span className="pr-[10px] opacity-[0.25] font-bold">03</span>SPACE LAUNCH 101
      </h1>
      <div className="mb-[34px] w-full md:mb-[56px]">
        <Image src={picture} alt="" className="w-full md:h-[310px]"/>
      </div>
      <div className="flex justify-center items-center mb-[26px] md:mb-[44px] md:gap-[16px]">
        <Link href="/technology">
          <div className="w-[40px] h-[40px] border border-gray-800 rounded-full hover:opacity-[0.5] active:opacity-[1] font-bellefair flex justify-center items-center text-cream mr-[16px] hover:border-cream active:bg-cream active:text-darkBlue md:h-[60px] md:w-[60px] md:text-[24px]">1 </div>
        </Link>
        <Link href="/technology/spaceport">
        <div className="w-[40px] h-[40px] border border-gray-800 rounded-full hover:opacity-[0.5] active:opacity-[1] font-bellefair flex justify-center items-center text-cream mr-[16px] hover:border-cream active:bg-cream active:text-darkBlue md:h-[60px] md:w-[60px] md:text-[24px]">2 </div>
        </Link>
        <Link href="/technology/capsule">
        <div className="w-[40px] h-[40px] border border-gray-800 rounded-full hover:opacity-[0.5] active:opacity-[1] font-bellefair flex justify-center items-center text-cream hover:border-cream active:bg-cream active:text-darkBlue md:h-[60px] md:w-[60px] md:text-[24px]">3 </div>
        </Link>
      </div>

      <h3 className="font-barlow text-[14px] leading-[16.8px] tracking-[2.36px] text-center text-skyBlue mb-[9px] md:mb-[16px] md:text-[16px] md:leading-[19.2px] md:tracking-[2.7px] md:font-[400]">THE TERMINOLOGY...</h3>
      <h1 className="font-bellefair text-[24px] leading-[27.5px] text-cream text-center mb-[16px] md:text-[40px] md:leading-[46px]">{tech}</h1>

      <p className="px-[24px] pb-[56px] font-barlow text-[15px] leading-[25px] text-center text-skyBlue md:px-[155px] md:pb-[97px] md:text-[16px] md:leading-[28px]">{techParagraph}</p>

    </div>
  </>
  );
};

export default TechnologyPage;
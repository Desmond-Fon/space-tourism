import Header from "components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const TechnologyPage = ({ picture, tech, techParagraph, desktopPicture }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Space Tourism | Technology</title>
      </Head>
      <div className="bg-[url('../../public/assets/technology/background-technology-mobile.jpg')] md:bg-[url('../../public/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('../../public/assets/technology/background-technology-desktop.jpg')] bg-center bg-cover w-[100%] h-screen md:h-[100vh] lg:h-full">
        <Header />
        <h1 className="mt-[24px] md:mt-[40px] md:text-[20px] md:tracking-[3.38px] md:leading-[24px] md:text-left md:mb-[60px] mb-[32px] text-center font-barlow text-cream tracking-[2.7px] leading-[19.2px] text-[16px] md:pl-[24px] lg:mt-[76px] lg:ml-[166.5px] lg:text-[28px] lg:tracking-[4.72px] lg:leading-[33.6px] lg:mb-[26px]">
          <span className="pr-[10px] opacity-[0.25] font-bold">03</span>SPACE
          LAUNCH 101
        </h1>

        <div className="lg:flex lg:justify-between lg:flex-row-reverse lg:pb-[101px] lg:items-center lg:overflow-x-hidden">
          <div className="mb-[34px] w-full md:mb-[56px] lg:mb-0">
            <Image
              src={picture}
              alt=""
              className="w-full md:h-[310px] lg:hidden"
            />
            <Image
              src={desktopPicture}
              alt=""
              className="hidden lg:block lg:w-full lg:h-full"
            />
          </div>

          <div className="lg:flex lg:pl-[165px] lg:pr-[100px]">
            <div className="flex justify-center items-center mb-[26px] md:mb-[44px] md:gap-[16px] lg:flex lg:flex-col lg:items-center lg:justify-between">
              <Link href="/technology">
                <div
                  className={` ${
                    router.asPath === "/technology"
                      ? "w-[40px] h-[40px] border border-gray-800 rounded-full hover:opacity-[0.5] active:opacity-[1] font-bellefair flex justify-center items-center mr-[16px] hover:border-cream bg-cream text-darkBlue md:h-[60px] md:w-[60px] md:text-[24px] lg:mr-0 lg:h-[80px] lg:w-[80px]"
                      : "w-[40px] h-[40px] border border-gray-800 rounded-full hover:opacity-[0.5] active:opacity-[1] font-bellefair flex justify-center items-center text-cream mr-[16px] hover:border-cream active:bg-cream active:text-darkBlue md:h-[60px] md:w-[60px] md:text-[24px] lg:mr-0 lg:h-[80px] lg:w-[80px]"
                  }`}
                >
                  1{" "}
                </div>
              </Link>
              <Link href="/technology/spaceport">
                <div
                  className={`${
                    router.asPath === "/technology/spaceport"
                      ? "w-[40px] h-[40px] border border-gray-800 rounded-full hover:opacity-[0.5] active:opacity-[1] font-bellefair flex justify-center items-center mr-[16px] hover:border-cream bg-cream text-darkBlue md:h-[60px] md:w-[60px] md:text-[24px] lg:mr-0 lg:h-[80px] lg:w-[80px]"
                      : "w-[40px] h-[40px] border border-gray-800 rounded-full hover:opacity-[0.5] active:opacity-[1] font-bellefair flex justify-center items-center text-cream mr-[16px] hover:border-cream active:bg-cream active:text-darkBlue md:h-[60px] md:w-[60px] md:text-[24px] lg:mr-0 lg:h-[80px] lg:w-[80px]"
                  }`}
                >
                  2{" "}
                </div>
              </Link>
              <Link href="/technology/capsule">
                <div
                  className={`${
                    router.asPath === "/technology/capsule"
                      ? "w-[40px] h-[40px] border border-gray-800 rounded-full hover:opacity-[0.5] active:opacity-[1] font-bellefair flex justify-center items-center mr-[16px] hover:border-cream bg-cream text-darkBlue md:h-[60px] md:w-[60px] md:text-[24px] lg:mr-0 lg:h-[80px] lg:w-[80px]"
                      : "w-[40px] h-[40px] border border-gray-800 rounded-full hover:opacity-[0.5] active:opacity-[1] font-bellefair flex justify-center items-center text-cream mr-[16px] hover:border-cream active:bg-cream active:text-darkBlue md:h-[60px] md:w-[60px] md:text-[24px] lg:mr-0 lg:h-[80px] lg:w-[80px]"
                  }`}
                >
                  3{" "}
                </div>
              </Link>
            </div>

            <div className="lg:ml-[80px]">
              <h3 className="font-barlow text-[14px] leading-[16.8px] tracking-[2.36px] text-center text-skyBlue mb-[9px] md:mb-[16px] md:text-[16px] md:leading-[19.2px] md:tracking-[2.7px] md:font-[400] lg:text-left">
                THE TERMINOLOGY...
              </h3>
              <h1 className="font-bellefair text-[24px] leading-[27.5px] text-cream text-center mb-[16px] md:text-[40px] md:leading-[46px] lg:text-left lg:text-[56px] lg:leading-[64px]">
                {tech}
              </h1>

              <p className="px-[24px] pb-[56px] font-barlow text-[15px] leading-[25px] text-center text-skyBlue md:px-[155px] md:pb-[97px] md:text-[16px] md:leading-[28px] lg:px-0 lg:text-left lg:text-[18px] lg:leading-[32px]">
                {techParagraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyPage;

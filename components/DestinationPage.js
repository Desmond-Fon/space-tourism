import Header from "components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const DestinationPage = ({
  picture,
  time,
  planetName,
  planetParagraph,
  distance,
}) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Space Tourism | Destination</title>
      </Head>
      <div className="bg-[url('../../public/assets/destination/background-destination-mobile.jpg')] md:bg-[url('../../public/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('../../public/assets/destination/background-destination-desktop.jpg')] bg-center bg-cover w-full min-h-[100%] h-full md:h-[100vh] lg:h-full">
        <Header />
        <h1 className="mt-[24px] md:mt-[40px] md:text-[20px] md:tracking-[3.38px] md:leading-[24px] md:text-left md:mb-[60px] mb-[32px] text-center font-barlow text-cream tracking-[2.7px] leading-[19.2px] text-[16px] md:pl-[24px] lg:mt-[76px] lg:ml-[166.5px] lg:text-[28px] lg:tracking-[4.72px] lg:leading-[33.6px]">
          <span className="pr-[10px] opacity-[0.25] font-bold">01</span>PICK
          YOUR DESTINATION
        </h1>

        <div className="lg:flex lg:justify-between lg:items-end lg:mt-[64px] lg:pb-[118px] lg:mx-[163px]">
          <div className="flex justify-center items-center mb-[26px] md:mb-[53px] lg:ml-[50px]">
            <Image
              src={picture}
              alt=""
              className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]"
            />
          </div>

          <div className="lg:w-[445px] lg:text-left ">
            <div className="text-skyBlue font-barlow tracking-[2.36px] leading-[16.9px] text-[14px] flex justify-center items-center md:text-[16px] md:tracking-[2.7px] md:leading-[19.2px] lg:mb-[37px] lg:justify-between lg:w-[285px]">
              <Link
                href="/destination"
                className={` ${
                  router.asPath === "/destination"
                    ? "border-b-[3px] cursor-pointer pb-[8px] text-cream border-cream md:pb-[12px]"
                    : "hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream md:pb-[12px]"
                }`}
              >
                MOON
              </Link>
              <Link
                href="/destination/mars"
                className={` ${
                  router.asPath === "/destination/mars"
                    ? "ml-[27px] lg:ml-0 border-b-[3px] cursor-pointer pb-[8px] text-cream border-cream md:pb-[12px]"
                    : "ml-[27px] lg:ml-0 hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream md:pb-[12px]"
                }`}
              >
                MARS
              </Link>
              <Link
                href="/destination/europa"
                className={` ${
                  router.asPath === "/destination/europa"
                    ? "ml-[27px] lg:ml-0 border-b-[3px] cursor-pointer pb-[8px] text-cream border-cream md:pb-[12px]"
                    : "ml-[27px] hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream md:ml-[35px] md:pb-[12px] lg:ml-0"
                }`}
              >
                EUROPA
              </Link>
              <Link
                href="/destination/titan"
                className={` ${
                  router.asPath === "/destination/titan"
                    ? "ml-[27px] lg:ml-0 border-b-[3px] cursor-pointer pb-[8px] text-cream border-cream md:pb-[12px]"
                    : "ml-[27px] lg:ml-0 hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream md:ml-[35px] md:pb-[12px] "
                }`}
              >
                TITAN
              </Link>
            </div>

            <h1 className="font-bellefair text-center leading-[64.2px] text-cream text-[56px] mt-[20px] mb-[1px] md:mt-[32px text-[80px] md:leading-[92px] md:mb-[8px] lg:text-[100px] lg:leading-[114.6px] lg:mb-[14px] lg:text-left">
              {planetName}
            </h1>
            <p className="font-barlow text-center px-[24px] text-skyBlue text-[15px] leading-[25px] font-[400] md:px-[98px] md:text-[16px] md:leading-[28px] lg:text-[18px] lg:leading-[32px] lg:text-left lg:px-0">
              {planetParagraph}
            </p>

            <div className="flex justify-center items-center my-[32px] mt-[49px] mb-[28px]">
              <div className="h-[1px] w-[327px] bg-lineColor md:w-[573px]"></div>
            </div>

            <div className="md:flex md:justify-around md:px-[98px] md:items-center md:pb-[62px] md:mt-[49px] lg:justify-start lg:w-full lg:px-0 lg:mt-[28px]">
              <div className="lg:mr-[80px]">
                <p className="mt-[32px] mb-[12px] text-center text-[14px] leading-[16.8px] tracking-[2.36px] text-skyBlue font-barlow md:mt-[28px] lg:text-left">
                  AVG. DISTANCE
                </p>
                <p className="pb-[32px] font-bellefair text-[28px] text-center leading-[32.1px] text-cream md:pb-0  lg:text-left">
                  {distance}
                </p>
              </div>

              <div>
                <p className="mb-[12px] text-center text-[14px] leading-[16.8px] tracking-[2.36px] text-skyBlue font-barlow  md:mt-[28px]  lg:text-left">
                  EST. TRAVEL TIME
                </p>

                <p className="pb-[70px] font-bellefair text-[28px] text-center leading-[32.1px] text-cream md:pb-0  lg:text-left">
                  {time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationPage;

import Head from "next/head";
import Header from "components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('../../public/assets/home/background-home-mobile.jpg')] md:bg-[url('../../public/assets/home/background-home-tablet.jpg')] lg:bg-[url('../../public/assets/home/background-home-desktop.jpg')] bg-center bg-cover w-full h-full lg:h-full md:h-screen">
      <Head>
        <title>Space Tourism | Home</title>
      </Head>

      <Header />
      <main className="mt-[48px] md:mt-[106px] text-center px-[24px] md:px-[162px] lg:mt-[251px] lg:flex lg:justify-between lg:px-[165px] lg:text-left lg:items-end lg:pb-[131px]">
        <div className="lg:w-[450px]">
        <p className="text-skyBlue text-base md:text-[20px] font-barlow leading-[19px] md:leading-[24px] md:tracking-[3.38px] tracking-[2.7px] font-normal lg:leading-[33.6px] lg:text-[28px] lg:tracking-[4.7px]">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="mt-[16px] md:mt-[24px] text-cream font-bellefair font-normal text-[80px] md:text-[150px] md:leading-[150px] leading-[100px] lg:text-[150px] lg:leading-[172px]">
          SPACE
        </h1>
        <p className="text-skyBlue font-barlow font-normal mt-[16px] md:mt-[24px] text-[15px] md:text-[16px] md:leading-[28px] leading-[25px] lg:mt-0 lg:text-[18px] lg:leading-[32px]">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-[81px] md:mt-[156px] md:w-[242px] md:h-[242px] h-[150px] w-[150px] rounded-full bg-cream flex justify-center items-center hover:drop-shadow-2xl lg:mt-0 lg:w-[274px] lg:h-[274px]">
            <Link href="/destination">
              <button className="text-center font-normal text-[20px] md:text-[32px] md:leading-[37px] leading-[23px] md:tracking-[2px] tracking-[1.25px] text-darkBlue font-bellefair">
                EXPLORE
              </button>
            </Link>
        </div>
        </div>
      </main>
    </div>
  );
}

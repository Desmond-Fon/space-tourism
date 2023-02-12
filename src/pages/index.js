import Head from "next/head";
import Header from "components/Header";

export default function Home() {
  return (
    <div className="bg-[url('../../public/assets/home/background-home-mobile.jpg')] md:bg-[url('../../public/assets/home/background-home-tablet.jpg')] lg:bg--[url('../../public/assets/home/background-home-desktop.jpg')] bg-center bg-cover w-full h-[100vh]">
      <Head>
        <title>Space Tourism | Home</title>
      </Head>

      <Header />
      <main className="mt-[48px] text-center  px-[24px]">
        <p className="text-skyBlue text-base font-barlow leading-[19px] tracking-[2.7px] font-normal ">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="mt-[16px] text-cream font-bellefair font-normal text-[80px] leading-[100px]">
          SPACE
        </h1>
        <p className="text-skyBlue font-barlow font-normal mt-[16px] text-[15px] leading-[25px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>

        <div className="flex justify-center items-center">
          <div className="mt-[81px] h-[150px] w-[150px] rounded-full bg-cream flex justify-center items-center hover:drop-shadow-2xl">
            <p className="text-center font-normal text-[20px] leading-[23px] tracking-[1.25px] text-darkBlue font-bellefair">
              EXPLORE
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

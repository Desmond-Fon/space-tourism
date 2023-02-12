import Header from "components/Header";
import Head from "next/head";

const Spaceport = () => {
  return (
    <>
      <Head>
        <title>Space Tourism | Technology</title>
      </Head>
      <div className="bg-[url('../../public/assets/technology/background-technology-mobile.jpg')] md:bg-[url('../../public/assets/technology/background-technology-tablet.jpg')] lg:bg--[url('../../public/assets/technology/background-technology-desktop.jpg')] bg-center bg-cover w-full h-[100vh]">
        <Header />
        <h1 className="mt-[24px] mb-[32px] text-center font-barlow text-cream tracking-[2.7px] leading-[19.2px] text-[16px]">
          <span className="pr-[10px] opacity-[0.25] font-bold">03</span>SPACE LAUNCH 101
        </h1>
      </div>
    </>
  );
};

export default Spaceport;
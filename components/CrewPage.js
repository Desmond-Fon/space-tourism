import Header from "components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const CrewPage = ({ width, picture, name, post, description }, height) => {
  return (
    <div className="h-full">
      <Head>
        <title>Space Tourism | Crew</title>
      </Head>
      <div className="bg-[url('../../public/assets/crew/background-crew-mobile.jpg')] md:bg-[url('../../public/assets/crew/background-crew-tablet.jpg')] lg:bg--[url('../../public/assets/crew/background-crew-desktop.jpg')] bg-center bg-cover h-screen w-full md:h-screen pb-[154px] md:p-0">
        <Header />
        <h1 className="mt-[24px] md:mt-[40px] md:text-[20px] md:tracking-[3.38px] md:leading-[24px] md:text-left md:mb-[60px] mb-[32px] text-center font-barlow text-cream tracking-[2.7px] leading-[19.2px] text-[16px] md:pl-[24px]">
          <span className="pr-[10px] opacity-[0.25] font-bold">02</span>MEET
          YOUR CREW
        </h1>

        <div className="md:flex md:flex-col-reverse">
          <div className="flex justify-center items-center mb-[32px] md:mb-0">
            <Image src={picture} alt="" className={`${width} ${height}`} />
          </div>

          <div className="flex justify-center items-center mb-[32px] md:mb-[40px]">
            <Link href="/crew">
              <div className="w-[10px] h-[10px] bg-cream rounded-full opacity-[0.17] hover:opacity-[0.5] active:opacity-[1]"></div>
            </Link>
            <Link href="/crew/mark">
              <div className="w-[10px] h-[10px] bg-cream rounded-full ml-[16px] opacity-[0.17] hover:opacity-[0.5] active:opacity-[1]"></div>
            </Link>
            <Link href="/crew/victor">
              <div className="w-[10px] h-[10px] bg-cream rounded-full  ml-[16px] opacity-[0.17] hover:opacity-[0.5] active:opacity-[1]"></div>
            </Link>
            <Link href="/crew/anousheh">
              <div className="w-[10px] h-[10px] bg-cream rounded-full ml-[16px] opacity-[0.17] hover:opacity-[0.5] active:opacity-[1]"></div>
            </Link>
          </div>

          <div>
            <h2 className=" md:text-[24px] md:leading-[27.5px] mb-[8px] font-bellefair text-[16px] leading-[18.5px] text-center text-cream opacity-[0.5]">
              {post}
            </h2>

            <h1 className="mb-[16px] text-[24px] font-bellefair leading-[28px] text-cream text-center md:text-[40px] md:leading-[46px]">
              {name}
            </h1>

            <p className="px-[24px] text-center font-barlow text-[15px] leading-[25px] text-skyBlue md:px-[155px] md:text-[16px] md:leading-[28px] md:mb-[40px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewPage;

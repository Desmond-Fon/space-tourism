import Header from "components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const CrewPage = ({ width, picture, name, post, description , height, padding}) => {
  const router = useRouter();

  return (
    <div className="h-full">
      <Head>
        <title>Space Tourism | Crew</title>
      </Head>
      <div className="bg-[url('../../public/assets/crew/background-crew-mobile.jpg')] md:bg-[url('../../public/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('../../public/assets/crew/background-crew-desktop.jpg')] bg-center bg-cover h-screen w-full md:h-screen pb-[154px] md:p-0 lg:h-full">
        <Header />
         <h1 className="mt-[24px] md:mt-[40px] md:text-[20px] md:tracking-[3.38px] md:leading-[24px] md:text-left md:mb-[60px] mb-[32px] text-center font-barlow text-cream tracking-[2.7px] leading-[19.2px] text-[16px] md:pl-[24px] lg:mt-[76px] lg:ml-[166.5px] lg:text-[28px] lg:tracking-[4.72px] lg:leading-[33.6px] lg:mb-0">
          <span className="pr-[10px] opacity-[0.25] font-bold">02</span>MEET
          YOUR CREW
        </h1>

        <div className="md:flex md:flex-col-reverse lg:flex-row-reverse lg:justify-between items-center">
          <div className={`flex justify-center items-center mb-[32px] md:mb-0 ${padding}`}>
            <Image src={picture} alt="" className={`${width} ${height}`} />
          </div>

          <div className="flex justify-center items-center mb-[32px] md:mb-[40px] lg:hidden">
            <Link href="/crew">
              <div
               className={` ${
                router.asPath === "/crew"
                  ? "w-[10px] h-[10px] bg-cream rounded-full  hover:opacity-[0.5] opacity-[1]"
                  : "w-[10px] h-[10px] bg-cream rounded-full opacity-[0.17] hover:opacity-[0.5] active:opacity-[1]"
              }`}
              ></div>
            </Link>
            <Link href="/crew/mark">
            <div
               className={` ${
                router.asPath === "/crew/mark"
                  ? "w-[10px] h-[10px] bg-cream rounded-full  hover:opacity-[0.5] opacity-[1] ml-[16px]"
                  : "w-[10px] h-[10px] bg-cream rounded-full opacity-[0.17] hover:opacity-[0.5] ml-[16px] active:opacity-[1]"
              }`}
              ></div>
            </Link>
            <Link href="/crew/victor">
            <div
               className={` ${
                router.asPath === "/crew/victor"
                  ? "w-[10px] h-[10px] bg-cream rounded-full  hover:opacity-[0.5] opacity-[1] ml-[16px]"
                  : "w-[10px] h-[10px] bg-cream rounded-full opacity-[0.17] hover:opacity-[0.5] ml-[16px] active:opacity-[1]"
              }`}
              ></div>
            </Link>
            <Link href="/crew/anousheh">
            <div
               className={` ${
                router.asPath === "/crew/anousheh"
                  ? "w-[10px] h-[10px] bg-cream rounded-full  hover:opacity-[0.5] opacity-[1] ml-[16px]"
                  : "w-[10px] h-[10px] bg-cream rounded-full opacity-[0.17] hover:opacity-[0.5] ml-[16px] active:opacity-[1]"
              }`}
              ></div>
            </Link>
          </div>

          <div className="lg:ml-[166px] lg:text-left lg:w-[488px] lg:mt-[154px]">
            <h2 className=" md:text-[24px] md:leading-[27.5px] mb-[8px] font-bellefair text-[16px] leading-[18.5px] text-center text-cream opacity-[0.5] lg:text-left lg:text-[32px] lg:leading-[37px] lg:mb-[15px]">
              {post}
            </h2>

            <h1 className="mb-[16px] text-[24px] font-bellefair leading-[28px] text-cream text-center md:text-[40px] md:leading-[46px] lg:text-left lg:text-[56px] lg:leading-[64px] lg:mb-[27px]">
              {name}
            </h1>

            <p className="px-[24px] text-center font-barlow text-[15px] leading-[25px] text-skyBlue md:px-[155px] md:text-[16px] md:leading-[28px] md:mb-[40px] lg:text-left lg:px-0 lg:text-[18px] lg:leading-[32px] lg:mb-[120px]">
              {description}
            </p>

            <div className="hidden lg:flex justify-start items-center mb-[32px] md:mb-[40px]">
            <Link href="/crew">
            <div
               className={` ${
                router.asPath === "/crew"
                  ? "w-[10px] h-[10px] bg-cream rounded-full  hover:opacity-[0.5] opacity-[1]"
                  : "w-[10px] h-[10px] bg-cream rounded-full opacity-[0.17] hover:opacity-[0.5] active:opacity-[1]"
              }`}
              ></div>
            </Link>
            <Link href="/crew/mark">
            <div
               className={` ${
                router.asPath === "/crew/mark"
                  ? "w-[10px] h-[10px] bg-cream rounded-full  hover:opacity-[0.5] opacity-[1] ml-[16px]"
                  : "w-[10px] h-[10px] bg-cream rounded-full opacity-[0.17] hover:opacity-[0.5] ml-[16px] active:opacity-[1]"
              }`}
              ></div>
            </Link>
            <Link href="/crew/victor">
            <div
               className={` ${
                router.asPath === "/crew/victor"
                  ? "w-[10px] h-[10px] bg-cream rounded-full  hover:opacity-[0.5] opacity-[1] ml-[16px]"
                  : "w-[10px] h-[10px] bg-cream rounded-full opacity-[0.17] hover:opacity-[0.5] ml-[16px] active:opacity-[1]"
              }`}
              ></div>
            </Link>
            <Link href="/crew/anousheh">
            <div
               className={` ${
                router.asPath === "/crew/anousheh"
                  ? "w-[10px] h-[10px] bg-cream rounded-full  hover:opacity-[0.5] opacity-[1] ml-[16px]"
                  : "w-[10px] h-[10px] bg-cream rounded-full opacity-[0.17] hover:opacity-[0.5] ml-[16px] active:opacity-[1]"
              }`}
              ></div>
            </Link>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewPage;

import logo from "../public/assets/shared/logo.svg";
import hamburger from "../public/assets/shared/icon-hamburger.svg";
import close from "../public/assets/shared/icon-close.svg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const router = useRouter();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  let menu;

  if (!isOpen) {
    menu = (
      <div className="text-white flex flex-col pt-[64px]">
        <Link
          href="/"
          className="mb-[32px] font-barlow font-normal text-base tracking-[2.7px] text-cream"
        >
          <span className="font-barlow font-[700] pr-[11px]">00</span> HOME
        </Link>
        <Link
          href="/destination"
          className="mb-[32px] font-barlow font-normal text-base tracking-[2.7px] text-cream"
        >
          <span className="font-barlow font-[700] pr-[11px]">01</span>
          DESTINATION
        </Link>
        <Link
          href="/crew"
          className="mb-[32px] font-barlow font-normal text-base tracking-[2.7px] text-cream"
        >
          <span className="font-barlow font-bold text-base pr-[11px]">02</span>
          CREW
        </Link>
        <Link
          href="/technology"
          className="mb-[32px] font-barlow font-normal text-base leading-4 tracking-[2.7px] text-cream"
        >
          <span className="font-barlow font-[700] pr-[11px]">03</span>
          TECHNOLOGY
        </Link>
      </div>
    );
  }

  return (
    <div className="p-[24px] md:pr-0 md:pt-0 flex items-center justify-between lg:pl-[55px] lg:pt-[40px]">
      <Link href="/">
        <Image
          src={logo}
          alt=""
          width={40}
          height={40}
          className="md:w-[48px] md:h-[48px]"
        />
      </Link>
      {isOpen ? (
        <Image
          src={hamburger}
          alt=""
          onClick={toggleOpen}
          width={24}
          height={21}
          className="md:hidden"
        />
      ) : (
        <div className="absolute right-[0] top-[0px] h-[100%] w-[254px] backdrop-blur-[50px] bg-trans py-[33px] px-[26px] z-20">
          <div className="flex justify-end">
            <Image
              src={close}
              onClick={toggleOpen}
              alt=""
              width={20}
              height={20}
            />
          </div>
          {menu}
        </div>
      )}
      <div className="hidden md:flex h-[96px] md:backdrop-blur-[50px] bg-trans justify-center items-center lg:w-[830px]">
        <div className="text-white flex justify-center items-center lg:justify-between lg:ml-[123px] lg:mr-[165px] w-full">
          <Link
            href="/"
            className={` ${
              router.asPath === "/"
                ? "font-barlow font-normal text-base leading-[16.8px] tracking-[2.4px] text-cream mr-[37px] ml-[40px] border-b-[3px] border-cream lg:ml-0 lg:mr-[48px]"
                : "font-barlow font-normal text-base leading-[16.8px] tracking-[2.4px] text-cream mr-[37px] ml-[40px] active:border-b-[3px] active:border-cream lg:ml-0 lg:mr-[48px]"
            }`}
          >
            {" "}
            <span className="hidden lg:inline mr-[11px] font-[700] tracking-[2.7px]">
              00
            </span>
            HOME
          </Link>
          <Link
            href="/destination"
            className={` ${
              router.asPath === "/destination"
                ? "font-barlow font-normal text-base leading-[16.8px] tracking-[2.4px] text-cream mr-[37px] border-b-[3px] border-cream lg:mr-[48px]"
                : "font-barlow font-normal text-base leading-[16.8px] tracking-[2.4px] text-cream mr-[37px] active:border-b-[3px] active:border-cream lg:mr-[48px]"
            }`}
          >
            {" "}
            <span className="hidden lg:inline mr-[11px] font-[700] tracking-[2.7px]">
              01
            </span>
            DESTINATION
          </Link>
          <Link
            href="/crew"
            className={` ${
              router.asPath === "/crew"
                ? "font-barlow font-normal text-base leading-[16.8px] tracking-[2.4px] text-cream mr-[37px] border-b-[3px] border-cream lg:mr-[48px]"
                : "font-barlow font-normal text-base leading-[16.8px] tracking-[2.4px] text-cream mr-[37px] active:border-b-[3px] active:border-cream lg:mr-[48px]"
            }`}
          >
            {" "}
            <span className="hidden lg:inline mr-[11px] font-[700] tracking-[2.7px]">
              02
            </span>
            CREW
          </Link>
          <Link
            href="/technology"
            className={` ${
              router.asPath === "/technology"
                ? "font-barlow font-normal text-base leading-[16.8px] tracking-[2.4px] text-cream mr-[37px] border-b-[3px] border-cream lg:mr-[48px]"
                : "font-barlow font-normal text-base leading-[16.8px] tracking-[2.4px] text-cream mr-[37px] active:border-b-[3px] active:border-cream lg:mr-[48px]"
            }`}
          >
            {" "}
            <span className="hidden lg:inline mr-[11px] font-[700] tracking-[2.7px]">
              03
            </span>
            TECHNOLOGY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

import logo from "../public/assets/shared/logo.svg";
import hamburger from "../public/assets/shared/icon-hamburger.svg";
import close from "../public/assets/shared/icon-close.svg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

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
    <div className="p-[24px] md:pr-0 md:pt-0 flex items-center justify-between">
      <Link href="/">
        <Image src={logo} alt="" width={40} height={40} />
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
        <div className="absolute right-[0] top-[0px] h-[100%] w-[254px] backdrop-blur-[50px] bg-trans py-[33px] px-[26px]">
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
      <div className="hidden md:flex h-[96px] md:backdrop-blur-[50px] bg-trans justify-center items-center">
        <div className="text-white flex justify-center items-center">
          <Link
            href="/"
            className="font-barlow font-normal text-base leading-[16.8px] tracking-[2.4px] text-cream mr-[37px] ml-[40px] active:border-b-[3px] active:border-cream"
          >
            HOME
          </Link>
          <Link
            href="/destination"
            className="font-barlow font-normal text-base leading-[16.8px] tracking-[2.4px] text-cream mr-[37px] active:border-b-[3px] active:border-cream"
          >
            DESTINATION
          </Link>
          <Link
            href="/crew"
            className="font-barlow font-normal text-base leading-[16.8px] tracking-[2.4px] text-cream mr-[37px] active:border-b-[3px] active:border-cream"
          >
            CREW
          </Link>
          <Link
            href="/technology"
            className="font-barlow font-normal text-base leading-[16.8px] tracking-[2.4px] text-cream mr-[40px] active:border-b-[3px] active:border-cream"
          >
            TECHNOLOGY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

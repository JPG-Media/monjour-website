import React from "react";
import Link from "next/link";
import NavbarRight from "./NavbarRight";
import LogoCGDarkTheme from "../assets/LogoCGDarkTheme.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex py-5 justify-center items-center scroll-smooth scroll-p-4">
        

      <Link href="/">
        <Image 
        className="w-auto h-[15rem] font-teko text-9xl text-white" 
        src={LogoCGDarkTheme} 
        alt='LOGO'/>
      </Link>

      <NavbarRight />
    </nav>
  );
};

export default Navbar;

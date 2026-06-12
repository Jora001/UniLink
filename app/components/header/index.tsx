'use client';

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export default function Header() {
  return (
    <header className="top-0 left-0 right-0 w-full fixed bg-[#FFFFFF08] backdrop-blur-[48px] shadow-[inset_0px_0px_68px_0px_#FFFFFF0D,inset_0px_4px_4px_0px_#FFFFFF26] z-50">
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
}
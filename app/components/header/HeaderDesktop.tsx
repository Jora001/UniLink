'use client';

import { useAuthModal } from "@/app/context/auth/AuthModalContext";
import useNavbar from "@/app/hooks/navbar/useNavbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeaderDesktop() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpenJoin, setIsOpenJoin] = useState(false);

    const wrapperRef = useRef<HTMLDivElement>(null);

    const [href, setHref] = useState("/");
    const { navItems } = useNavbar();
    const { openModal } = useAuthModal();


    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsOpenJoin(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return (() => {
            document.removeEventListener('mousedown', handleClickOutside);
        })
    }, []);


    return <header className="hidden xl:flex justify-between items-center h-25 px-20">

        <Link href={href}>
            <Image
                src={"/images/unilink/logo.png"}
                alt="UniLink"
                width={128.86}
                height={48}
                className=""
            />
        </Link>

        <nav className="flex items-center justify-between w-full">
            <ul className="flex items-center justify-between gap-6.25 font-normal text-nowrap mx-auto">
                {navItems.map((item, idx) =>
                    <li
                        key={idx}
                        className="cursor-pointer flex items-center justify-center gap-1 px-2.5 group relative"
                    >
                        <Link href={item.href}>{item.name}</Link>
                        {item.subItems && <div>
                            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="block group-hover:hidden">
                                <path d="M9.925 -0.000134468L10.8083 0.884032L5.99417 5.69987C5.91703 5.77749 5.8253 5.8391 5.72425 5.88114C5.62321 5.92318 5.51485 5.94482 5.40542 5.94482C5.29598 5.94482 5.18762 5.92318 5.08658 5.88114C4.98554 5.8391 4.89381 5.77749 4.81667 5.69987L0 0.884032L0.883333 0.000698566L5.40417 4.5207L9.925 -0.000134468Z" fill="white" />
                            </svg>
                            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="hidden group-hover:block">
                                <path d="M0.88335 5.94496L1.71661e-05 5.06079L4.81418 0.244959C4.89132 0.16733 4.98305 0.105723 5.0841 0.0636827C5.18514 0.0216428 5.29349 0 5.40293 0C5.51237 0 5.62073 0.0216428 5.72177 0.0636827C5.82281 0.105723 5.91454 0.16733 5.99168 0.244959L10.8083 5.06079L9.92502 5.94413L5.40418 1.42413L0.88335 5.94496Z" fill="white" />
                            </svg>
                        </div>
                        }

                        {item.subItems && <ul className="absolute hidden group-hover:flex flex-col justify-center gap-2.5 w-40.75 h-37.75 top-6 px-1.25 rounded-[25px] bg-[#FFFFFF08] backdrop-blur-[48px] shadow-[inset_0px_0px_68px_0px_#FFFFFF0D,inset_0px_4px_4px_0px_#FFFFFF26] ">
                            {item.subItems.map((subItem, subIdx) => <li key={subIdx}>
                                {subItem}
                            </li>)}
                        </ul>}
                    </li>
                )}
            </ul>

            <div className="flex items-center justify-between gap-5 max-w-65 max-h-12">
                <p className="cursor-pointer">EN</p>
                {isLoggedIn ?
                    <button className="w-20 h-12 py-2.5 px-6 bg-(--primary) shadow-[0px_4px_4px_0px_#00000040] border-[0.8px] border-(--primary) rounded-3xl cursor-pointer">
                        <Image
                            src={"/images/header/profile.png"}
                            alt="Profile"
                            width={32}
                            height={32}
                        />
                    </button> :
                    <div
                        ref={wrapperRef}
                        className="relative flex flex-col items-center"
                    >
                        <button
                            onClick={() => setIsOpenJoin(prev => !prev)}
                            className={`max-w-47.5 h-12 px-6 py-2.5 hover:bg-(--primary-hover) rounded-3xl border-[0.8px] border-(--primary) hover:border-[#A5B9D4] shadow-[inset_0px_4px_4px_0px_#00000040] text-nowrap cursor-pointer transition-all duration-200 ${isOpenJoin ? "bg-(--primary-hover) border-[#A5B9D4]" : "bg-(--primary)"} `}
                        >
                            Join the platform
                        </button>
                        {isOpenJoin && <div className="absolute flex flex-col justify-center items-center mt-10 gap-2.5 w-40.75 h-30 top-6 px-1.25 rounded-[25px] bg-[#FFFFFF08] backdrop-blur-[48px] shadow-[inset_0px_0px_68px_0px_#FFFFFF0D,inset_0px_4px_4px_0px_#FFFFFF26] ">
                            <button
                                onClick={() => {
                                    setIsOpenJoin(false)
                                    openModal("signIn")
                                }}
                                className="text-nowrap bg-(--primary) hover:bg-(--primary-hover) rounded-full py-2 w-[85%] cursor-pointer shadow-[inset_0px_4px_4px_0px_#00000040] transition-all duration-200 ">
                                Sign In
                            </button>
                            <button
                                onClick={() => {
                                    setIsOpenJoin(false)
                                    openModal("signUp")
                                }}
                                className="text-nowrap bg-(--primary) hover:bg-(--primary-hover) rounded-full py-2 w-[85%] cursor-pointer shadow-[inset_0px_4px_4px_0px_#00000040] transition-all duration-200 "
                            >
                                Sign Up
                            </button>
                        </div>}
                    </div>
                }
            </div>
        </nav>
    </header>
}
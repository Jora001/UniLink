'use client';

import { useAuth } from "@/app/context/auth/AuthContext";
import { useAuthModal } from "@/app/context/auth/AuthModalContext";
import useLogout from "@/app/hooks/auth/useLogout";
import useNavbar from "@/app/hooks/navbar/useNavbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function HeaderDesktop() {
    const router = useRouter();
    const { user, setUser } = useAuth();
    const { logout } = useLogout();
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);

    const wrapperRef = useRef<HTMLDivElement>(null);

    const { navItems } = useNavbar();
    const { openModal } = useAuthModal();


    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsOpenDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return (() => {
            document.removeEventListener('mousedown', handleClickOutside);
        })
    }, []);


    const handleLogout = async() => {
        const data = await logout();

        if(data) {
            setUser(null);
            router.push("/");
        }
    }


    return <header className="max-w-360 mx-auto hidden lg:flex justify-between items-center h-25 lg:px-20 md:px-10 text-gray-300">

        <Link href={user ? "/profile" : "/"}>
            <Image
                src={"/images/header/logo.png"}
                alt="UniLink"
                width={128.86}
                height={48}
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
                    </li>
                )}
            </ul>

            <div className="flex items-center justify-between gap-5 max-w-65 max-h-12">
                <p className="cursor-pointer">EN</p>
                <div
                    ref={wrapperRef}
                    className="relative flex flex-col items-center text-white "
                >
                    <button
                        onClick={() => setIsOpenDropdown(prev => !prev)}
                        className={` cursor-pointer transition-all duration-200 bg-(--primary) hover:bg-(--primary-hover) border-[0.8px] border-(--primary) px-6
                                ${user ?
                                "w-20 h-12 py-2.5 shadow-[0px_4px_4px_0px_#00000040] rounded-3xl" :
                                "max-w-47.5 h-12 py-2.5 rounded-3xl shadow-[inset_0px_4px_4px_0px_#00000040] text-nowrap hover:border-[#A5B9D4] "} 
                            ${isOpenDropdown ? "bg-(--primary-hover) border-[#A5B9D4]" : "bg-(--primary)"} `}
                    >
                        {user ? <Image
                            src={"/images/header/profile.png"}
                            alt="Profile"
                            width={32}
                            height={32}
                        /> : <p>Join the platform</p>}
                    </button>
                    {isOpenDropdown && <div className="absolute flex flex-col justify-center items-center mt-10 gap-2.5 min-w-40.75 h-30 top-6 px-4 rounded-[25px] bg-[#FFFFFF08] backdrop-blur-[48px] shadow-[inset_0px_0px_68px_0px_#FFFFFF0D,inset_0px_4px_4px_0px_#FFFFFF26] ">
                        <button
                            onClick={() => {
                                setIsOpenDropdown(false);
                                openModal("signIn");
                            }}
                            className="text-nowrap bg-(--primary) hover:bg-(--primary-hover) rounded-full py-2 px-3 w-full cursor-pointer shadow-[inset_0px_4px_4px_0px_#00000040] transition-all duration-200 ">
                            {user ? <p> business account </p> : <p>Sign In</p>}
                        </button>
                        <button
                            onClick={() => {
                                setIsOpenDropdown(false);
                                user ? handleLogout() : openModal("signUp");
                            }}
                            className="text-nowrap bg-(--primary) hover:bg-(--primary-hover) rounded-full py-2 px-3 w-full cursor-pointer shadow-[inset_0px_4px_4px_0px_#00000040] transition-all duration-200 "
                        >
                            {user ? <p>Log out</p> : <p>Sign Up</p>}
                        </button>
                    </div>}
                </div>
            </div>
        </nav>
    </header>
}